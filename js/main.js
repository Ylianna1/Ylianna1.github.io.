var app = new Vue({
        el: '#app',
        data: {           
            products: [{
                    id: '1',
                    title: 'Chanterelle',
                    short_text: 'Chanterelle is the common name of several species of fungi in the genera Cantharellus, Craterellus, Gomphus, and Polyozellus.',
                   desc:'Full desc',
 			img: 'img/fox.jpg'
	
                },
                {
                    id: '2',
                    title: 'Hypholoma fasciculare',
                    short_text: 'Poisonous mushroom from the genus Hypholoma of the Strophariaceae family.',
                  desc:'Full desc',
                    img: 'img/Ложноопёнок.jpg'
                },
                {
                    id: '3',
                    title: 'Agaric Honey',
                    short_text: 'A honey-colored edible mushroom commonly associated with the roots of trees in late summer and fall; do not eat raw',
                    desc:'Full desc',
                    img: 'img/Опёнок.jpg'
                },
		{
                    id: '4',
                    title: 'Рsilocybin',
                    short_text: 'Naturally occurring psychedelic prodrug compound produced by more than 200 species of fungi. The most potent are members of the genus Psilocybe, such as P. azurescens, P. semilanceata, and P. cyanescens, but psilocybin has also been isolated from about a dozen other genera.',
                    desc:'Full desc',
                    img: 'img/Псилоцибин.jpg'
                },
		{
                    id: '5',
                    title: 'Stropharia aeruginosa',
                    short_text: 'Commonly known as the verdigris agaric, is a medium-sized green, slimy woodland mushroom, found on lawns, mulch and woodland from spring to autumn.',
                    desc:'Full desc',
                    img: 'img/Строфария_сине-зелёная.jpg'
                },

                   
            ],
        }
    })