//Interface of the photo response from Flickr
export interface Photo {
  farm: number
  id: string
  isfamily: number
  isfriend: number
  ispublic: number
  owner: string
  secret: string
  server: string
  title: string
}
