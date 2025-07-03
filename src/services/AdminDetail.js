export const AdminDetail = async () => {



  try {
    const response = await fetch("https://www.reecosys.com/api/Admin/admin/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093"
      },
      body: JSON.stringify({
        user_name : "smarthomesinfrastructure"
      })
    });

    const data = await response.json(); // ✅ Parse JSON
    if(data.success == 1){
      return data.data; 
    }

  } catch (error) {
    console.error("❌ API call failed:", error);
    return {};
  }
};