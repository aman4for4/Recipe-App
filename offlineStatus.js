export const updateOnlineStatus = () => {
    const offlineMessage = document.getElementById("offline-message");
  
    if (!navigator.onLine) {
      offlineMessage.style.display = "block";
    } else {
      offlineMessage.style.display = "none";
    }
  };
  
  
  