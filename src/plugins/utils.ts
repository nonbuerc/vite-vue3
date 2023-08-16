// export const getImageUrl = (url: any) => {
//   return new URL(url, import.meta.url).href
// }
export const useMergePic = ({ img1, obj: { src, x, y, width, height } }: any): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img1Obj = new Image()
    img1Obj.crossOrigin = 'anonymous'
    img1Obj.src = img1

    img1Obj.onload = function () {
      canvas.width = img1Obj.width
      canvas.height = img1Obj.height
      ctx.drawImage(img1Obj, 0, 0, img1Obj.width, img1Obj.height)

      const img2Obj = new Image()
      img2Obj.crossOrigin = 'anonymous'
      img2Obj.src = src

      img2Obj.onload = function () {
        ctx.drawImage(img2Obj, x, y, width, height)
        const base64 = canvas.toDataURL()
        resolve(base64)
      }
    }
  })
}
