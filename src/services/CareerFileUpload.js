export const CareerFileUpload = async (data) => {
    try {
        const formData = new FormData();
        formData.append("from_app", data.from_app);
        formData.append("upload_type", data.upload_type);
        formData.append("resume_upload", data.resume_upload); 

        const response = await fetch("https://www.reecosys.com/api/Services/career/upload_file", {
            method: "POST",
            headers: {
                "Authorization": "User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093"
            },
            body: formData
        });

        const APIresponse = await response.json();
        return APIresponse;

    } catch (error) {
        console.error("❌ API call failed:", error);
        return {};
    }
};
