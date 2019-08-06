export default class BookstoreService {

    data =  [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://static.itbook.download/img/5/0/5044558a4738f862f5699ba9117c63df_300.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 10,
            coverImage: 'https://bizlit.com.ua/image/cache/data/image2/kniga-release-it-proektirovanie-i-dizajn-po-dlja-teh-komu-ne-vsjo-ravno-600x800.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happend.'))
                } else {
                    resolve(this.data);
                }
            }, 700)
        });
    }
}
