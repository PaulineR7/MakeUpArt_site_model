const articles = [{
    name: "Rougealevres",
    title: "Le rouge à lèvres",
    article: "Le rouge à lèvres est un produit de cosmétique permettant de souligner les lèvres en les colorant ou non. Il en existe beaucoup de variantes, quant à la tenue, la couleur, la texture et le fini. Un rouge à lèvres n'est pas forcément rouge, même si le plus souvent sa couleur est proche du rouge (rouges vifs, sombres, vermillons, roses, orangés, etc.). Des couleurs comme le bleu ou le vert ne se rencontrent qu'exceptionnellement.",
    image: "images/rougealevres.jpeg"
}, {
    name: "Mascara",
    title: "Le Mascara",
    article: "Le mascara se compose d'un tube contenant le produit colorant sous forme liquide ou crémeuse et d'une brosse droite, courbée voire sphérique. La brosse est plongée dans le tube puis appliquée sur les cils. Le mascara contient de l 'eau, des épaississants, des agents filmogènes, des colorants et des conservateurs. Il existe en différents couleurs mais principalement en  noir. Il existe des mascaras résistants à l 'eau, ce qui leur évite de couler sous les yeux en cas de pluie, de larmes ou de sueur excessive.",
    image: "images/mascara.png"
}, {
    name: "Fard",
    title: "Le Fard à paupières",
    article: "Le fard à paupières ou ombre à paupières, il se présente généralement sous forme de poudre compactée qui s'applique avec une brosse ou à la main. Il s'applique par nuance de la plus claire à la plus foncée en commençant près de l'œil sur la paupière mobile et en terminant par la nuance la plus foncée au ras des cils.",
    image: "images/fard.jpeg"
}]


let header = document.createElement('header')
let body = document.querySelector('body')

let nav = document.createElement('nav')
let ul = document.createElement('ul')
let li = document.createElement('li')
let img1 = document.createElement('img')
let img2 = document.createElement('img')
let a = document.createElement('a')



ul.appendChild(li)
li.appendChild(img1)
img1.setAttribute('src', 'images/logo.png')
body.appendChild(header)
header.appendChild(nav)
nav.appendChild(ul)



for(i = 0 ; i < articles.length ; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    ul.appendChild(li)
    li.appendChild(a)
    a.setAttribute('href', articles[i].title )
    a.innerHTML = articles[i].title
}


let main = document.createElement('main')
let article = document.createElement('article')
let section = document.createElement('section')
//let div = document.createElement('div')

body.appendChild(main)

for(i = 0 ; i < articles.length ; i ++) {
    let section = document.createElement('section')
    let article = document.createElement('article')
    let div = document.createElement('div')
    let     h2 = document.createElement('h2')
    let p = document.createElement('p')
    let img = document.createElement('img')
  if(i % 2)  {
        main.appendChild(section)
        section.appendChild(article)
        section.appendChild(div)
        article.appendChild(h2)
        article.appendChild(p)
        div.appendChild(img)
        div.classList.add('rounded')
        img.setAttribute('src', articles[i].image)
        h2.innerHTML = articles[i].title
        p.innerHTML = articles[i].article
    } else {
        main.appendChild(section)
        section.appendChild(div)
        section.appendChild(article)
        article.appendChild(h2)
        article.appendChild(p)
        div.appendChild(img)
        div.classList.add('rounded')
        img.setAttribute('src', articles[i].image)
        h2.innerHTML = articles[i].title
        p.innerHTML = articles[i].article
    }

}

let footer = document.createElement('footer')



body.appendChild(footer)
footer.appendChild(a)
img2.setAttribute('src', 'images/logo.png')
a.appendChild(img2)