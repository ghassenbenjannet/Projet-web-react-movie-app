export const checkMaintenanceStatus = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/shared-data');
      const data = await response.json();
      return data.maintenance;
    } catch (error) {
      console.error('Erreur lors de la récupération du statut de maintenance :', error);
      return false; 
    }
  };
  