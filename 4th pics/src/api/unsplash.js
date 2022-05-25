import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID IoBqSJkVh8RPVUPPDwZVMqhsGBqVS3r9vtcmxP2t8Fk",
      }
});