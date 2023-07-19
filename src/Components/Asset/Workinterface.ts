export interface workdata{
        data:{
        title:string,
        link?:string, 
        description:string,
        cover:string
}, user:{
        username:string,
        password:string

},getuser:{
        id: number,
        name: string,
        username: string,
        email: string,
        address:{
          street: string,
          suite: string,
          city: string,
          zipcode: string,
          geo: {
            lat: number,
            lng: number
          }
        },
        phone: string,
        website: string,
        company: {
          name: string,
          catchPhrase: string,
          bs: string
        }
      }
}
export interface post{
  userId:number,
  Id?:number,
  title:string,
  body:string
}
export interface flashcard{
  Id:number,
  titleEng:string
  descrip:string
  titleTha:string
}