export const ProjectInquiry = async (data) => {

    try {
        const response = await fetch("https://www.reecosys.com/api/Services/inquiries/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093"
            },
            body: JSON.stringify(data)
        });

        const APIresponse = await response.json(); // ✅ Parse JSON
        if (APIresponse.success == 1) {
            return APIresponse;
        }

    } catch (error) {
        console.error("❌ API call failed:", error);
        return {};
    }
};