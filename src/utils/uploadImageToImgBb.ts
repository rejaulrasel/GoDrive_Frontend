import axios from "axios";

interface UploadResponse {
    success: boolean;
    url: string | null;
    error: Error | null;
}

async function uploadImageToImgBb(file: File): Promise<UploadResponse> {
    const img = new FormData();
    img.append('image', file);

    try {
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=aff4f22a4b2e03ac8b433d2f78dbbb87`, img);

        if (res.data?.success) {
            return {
                success: true,
                url: res.data?.data?.display_url || null,
                error: null
            };
        } else {
            return {
                success: false,
                url: null,
                error: new Error('Image upload failed')
            };
        }

    } catch (error) {
        return {
            success: false,
            url: null,
            error: error instanceof Error ? error : new Error('An unknown error occurred')
        };
    }
}

export default uploadImageToImgBb;
