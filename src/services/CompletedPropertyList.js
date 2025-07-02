export const CompletedPropertyList = async () => {

  console.log("✅ In Completed function");

  try {
    const response = await fetch("https://www.reecosys.com/api/Services/properties/completed_properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093"
      },
      body: JSON.stringify({
        all_detail: "1",
        master_user_id: "373",
        logged_in_master_user_id: "373"
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