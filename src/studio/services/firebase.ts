// Zero-Dependency Firebase Service Simulation for Studio Subdomain
// To enable real Firebase, run `npm install firebase`, uncomment imports, and remove simulation blocks.

const MOCK_STORAGE_KEY = "mangako-studio-mock-db";

const getMockDB = () => {
  const data = localStorage.getItem(MOCK_STORAGE_KEY);
  return data ? JSON.parse(data) : { projects: [], published_manga: [] };
};

const saveMockDB = (data: any) => {
  localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(data));
};

export const auth = {
  currentUser: null
};

export const studioService = {
  signIn: async () => {
    // Simulate pop-up delay safely
    await new Promise(r => setTimeout(r, 800));
    const mockUser = {
      uid: "mock-user-123",
      displayName: "Manga Creator",
      email: "creator@example.com",
      photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    };
    localStorage.setItem("mangako-mock-user", JSON.stringify(mockUser));
    return mockUser;
  },

  logOut: async () => {
    localStorage.removeItem("mangako-mock-user");
  },

  saveProject: async (userId: string, projectData: any) => {
    const db = getMockDB();
    const newProject = {
      id: projectData.id || `proj-${Date.now()}`,
      ownerId: userId,
      ...projectData,
      updatedAt: new Date().toISOString(),
      createdAt: projectData.createdAt || new Date().toISOString()
    };
    
    const index = db.projects.findIndex((p: any) => p.id === newProject.id);
    if (index >= 0) db.projects[index] = newProject;
    else db.projects.push(newProject);
    
    saveMockDB(db);
    return newProject;
  },

  getProjects: async (userId: string) => {
    const db = getMockDB();
    return db.projects.filter((p: any) => p.ownerId === userId);
  },

  publishProject: async (userId: string, projectId: string, listingData: any) => {
    const db = getMockDB();
    
    // Update Project Status node
    const projIndex = db.projects.findIndex((p: any) => p.id === projectId);
    if (projIndex >= 0) {
      db.projects[projIndex].status = "published";
      db.projects[projIndex].publishedAt = new Date().toISOString();
    }

    // Create Published document mapping
    const publishedManga = {
      id: `pub-${projectId}`,
      projectId,
      userId,
      ...listingData,
      source: "studio",
      publishedAt: new Date().toISOString()
    };
    
    db.published_manga.push(publishedManga);
    saveMockDB(db);
    return publishedManga;
  }
};

