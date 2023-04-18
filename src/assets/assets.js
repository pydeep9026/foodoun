const imageslogos = (fileName) =>{
    return require(`./images/logos/${fileName}`);
  };

  const imagescities = (fileName) =>{
    return require(`./images/cities/${fileName}`);
  };

  const imagesfooditems = (fileName) =>{
    return require(`./images/foodimages/${fileName}`);
  };


  const Assets={
    images:{
      logos:{
        zomato:imageslogos("zomato.png"),
        swiggy:imageslogos("Swiggy.png"),
        eatsure:imageslogos("eatsure.png"),
        foodoun:imageslogos("foodoun.png"),
      },
      cities:{
        mumbai:imagescities("mumbai.png"),
        delhi:imagescities("delhi.png"),
        bengaluru:imagescities("bengaluru.png"),
        hyderabad:imagescities("hyderabad.png"),
        ahmedabad:imagescities("ahmedabad.png"),
        chennai:imagescities("chennai.png"),
        kolkata:imagescities("kolkata.png"),
        pune:imagescities("pune.png"),
        jaipur:imagescities("jaipur.png"),
        lucknow:imagescities("lucknow.png"),
      },
      foodimages:{
        pizza:imagesfooditems("pizza.jpg"),
        basketchaat:imagesfooditems("basketchat.jpg"),
        biryani:imagesfooditems("biryani.jpg"),
        bisibelebath:imagesfooditems("bisibelebath.jpg"),
        butterchicken:imagesfooditems("butterchicken.jpg"),
        chholebhature:imagesfooditems("chholebhature.jpg"),
        coffee:imagesfooditems("coffee.jpg"),
        dalbatichurma:imagesfooditems("dalbatichurma.jpg"),
        dhokla:imagesfooditems("dhokla.webp"),
        handvo:imagesfooditems("handvo.jpg"),
        fafda:imagesfooditems("fafda.jpg"),
        ghevar:imagesfooditems("ghevar.jpg"),
        gulautikebab:imagesfooditems("gulautikebab.jpg"),
        haleem:imagesfooditems("haleem.webp"),
        icecream:imagesfooditems("icecream.jpg"),
        idli:imagesfooditems("idli.jpg"),
        masaladosa:imagesfooditems("masaladosa.webp"),
        iranichai:imagesfooditems("iranichai.webp"),
        kachori:imagesfooditems("kachori.jpg"),
        kathiroll:imagesfooditems("kathiroll.jpg"),
        kebabs:imagesfooditems("kebabs.jpg"),
        khaman:imagesfooditems("khaman.jpg"),
        lalmass:imagesfooditems("lalmass.jpg"),
        misalpav:imagesfooditems("misalpav.jpg"),
        mistidoi:imagesfooditems("mistidoi.jpg"),
        momos:imagesfooditems("momos.jpg"),
        mysorepak:imagesfooditems("mysorepak.jpg"),
        osmaniabiscuits:imagesfooditems("osmaniabiscuit.jpg"),
        panipuri:imagesfooditems("panipuri.jpg"),
        paranthe:imagesfooditems("paranthe.jpg"),
        pavbhaji:imagesfooditems("pavbhaji.jpg"),
        pyazkachori:imagesfooditems("pyazkachori.jpg"),
        rosogolla:imagesfooditems("rosogolla.jpg"),
        sheermal:imagesfooditems("sheermal.webp"),
        tundeykabab:imagesfooditems("tundeykebab.jpg"),
        vadapav:imagesfooditems("vadapav.jpg"),
      }
    }
  }

  export const {logos,cities,foodimages}=Assets.images
  export default Assets