//book.model.ts
export class Book{
    public bookTitle:string;
    public auther:string;
    public description:string;
    public imagePath:string;

    constructor(title:string,auther:string,desc:string,imagePath:string){
        this.bookTitle=title;
        this.auther=auther;
        this.description=desc;
        this.imagePath=imagePath;
    }
}