export const PropertyDetail = async (slug) => {

  console.log("✅ In Property Detail function herereererrereeeeeeeeeeeeeeeeeeerrrrr");
  console.log(slug , "<=== SLUGGGGGGGGGG")
  

  try {
    const response = await fetch("https://www.reecosys.com/api/Services/properties/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093"
      },
      body: JSON.stringify({
        all_detail: "1",
        master_user_id: "339",
        logged_in_master_user_id: "339",
        slug : slug
      })
    });

    const data = await response.json();
    console.log(data) // ✅ Parse JSON
    if(data.success == 1){
      return data.data; 
    }

  } catch (error) {
    console.error("❌ API call failed:", error);
    return {};
  }
};