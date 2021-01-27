export class FormFileChangeHandler{
    handleFileChange(event, onLoadFunction, ...loadFunctionArgs:any[]){
        const reader = new FileReader();
    
        if(event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
        
            reader.onload = () => {onLoadFunction(reader, loadFunctionArgs)};
        }
    }
}