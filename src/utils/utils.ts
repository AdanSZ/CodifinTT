
export const getRandImg = (): string => {
    const productImg = [
        'https://cdn.forbes.com.mx/2022/01/louis-philippe-poitras-WMMh6BtmTMo-unsplash-640x360.jpg',
        'https://assets.xboxservices.com/assets/9e/18/9e185a68-c601-4d72-b221-83bf1f8ce7e9.jpg?n=Xbox-App-for-Windows-PC_Image-1084_Update-Cloud_1920x850_02.jpg',
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6547/6547877_sd.jpg',
        'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw41775790/images/hi-res/55181_CSC.jpg?sw=768&sh=768&sfrm=png&q=95&bgcolor=f5f5f5',
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cc8bcb0c-2d4f-4f94-bfb6-a3dd2a8b775d/pants-de-f%C3%BAtbol-repel-tpmFZl.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d5ZmnbTaNHgIiSPXVzBwUjv2aTb_QZAKqw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8CFo46KZ-h_6kFlb-BUxfC4IyJ52TsJ15g&usqp=CAU',
        'https://cdn.mos.cms.futurecdn.net/mXSJ9eYkoUY52N6tQWokuT-320-80.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzkl0jOOQhFg03vQoz1oka6TqNSPXCduhkGIqafFwMvgXZJVpyUSelBOpyP2GBPM2MdQ&usqp=CAU',
        'https://motorolacaen.vtexassets.com/arquivos/ids/157143/thinkphone-pdp-ecom-render-1-carbon-black-n5re8wvk.png?v=638230454547030000',
        'https://s3-media0.fl.yelpcdn.com/bphoto/1GN4vEtjKfIoDkvTcFHqEg/348s.jpg',
        'https://www.romi.gov/ImageRepository/Document?documentID=21787',
        'https://files.hisense-usa.com/storage/hisense/asset/images/6650367625e5d2.webp',
        'https://www.lg.com/mx/images/estufas/md07567947/gallery/MZ-01.jpg',
    ]
    const random = Math.floor(Math.random() * productImg.length);
    return productImg[random]
}

export const formatCurrency = (price: number) => {
    const formater =  new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      return formater.format(price)
}
