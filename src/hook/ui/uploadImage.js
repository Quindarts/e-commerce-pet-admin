function useUploadImage() {
    const handleImageUpload = async (event, setimageSrc) => {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.onloadend = () => {
            setimageSrc(reader.result)
        }
        if (file) reader.readAsDataURL(file)
    }
    return { handleImageUpload }
}
export default useUploadImage
