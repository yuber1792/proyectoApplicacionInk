// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var db = null;

angular.module('starter', ['ionic','ionic.service.core','ngCordova','ionic.service.push','starter.controllers','ngSanitize','pascalprecht.translate'])



.run(function($ionicPlatform, $ionicUser, $cordovaSQLite,$translate) {
  $ionicPlatform.ready(function() {
     db = $cordovaSQLite.openDB("my.db");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");

    $ionicPlatform.registerBackButtonAction(function () {
      //alert("evento atras");
       $ionicSideMenuDelegate.toggleLeft();
    }, 100);

   
   $ionicUser.identify({
  // Generate GUID
  user_id: $ionicUser.generateGUID(),
  
  // OR, user the device's UUID
 // user_id: device.uuid
  });
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if(typeof navigator.globalization !== "undefined") {
                navigator.globalization.getPreferredLanguage(function(language) {
                    $translate.use((language.value).split("-")[0]).then(function(data) {
                        console.log("SUCCESS -> " + data);
                    }, function(error) {
                        console.log("ERROR -> " + error);
                    });
            }, null);
      }



      var admobid = {};
        // select the right Ad Id according to platform
        if( /(android)/i.test(navigator.userAgent) ) { 
            admobid = { // for Android
                banner: 'ca-app-pub-7713231088364165/4786381938',
                interstitial: 'ca-app-pub-7713231088364165/4786381938'
            };
        } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            admobid = { // for iOS
                banner: 'ca-app-pub-7713231088364165/8187173532',
                interstitial: 'ca-app-pub-7713231088364165/8187173532'
            };
        } else {
            admobid = { // for Windows Phone
                banner: 'ca-app-pub-6869992474017983/8878394753',
                interstitial: 'ca-app-pub-6869992474017983/1355127956'
            };
        }

       if(window.AdMob) AdMob.createBanner( {
         adId:admobid.banner, 
         position:AdMob.AD_POSITION.BOTTOM_CENTER, 
         // isTesting: true,
          autoShow:true} 
       );
 
                   


  });


})

 .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $translateProvider.translations('en', {
            buscarArtistas: "Find artist",
            Eventos: "Events",
            estilosTatuaje :"Tattoo style",
            multimedia :"Multimedia & Streaming",
            estudios: "Tattoo shop",
            promociones:"Promotions",
            bocetos:"Sketches",
            procedimientos:"Types of procedure",
            recuperacion:"Recovery",
            dolimetro:"Dolimetro",
            ayuda:"Help",
            denunciar:"Report",
            codigoArtista:"Artist code",
            tatuaje:"Tattoo",
            coverUp:"Cover up",
            remocion:"Removal",
            escarificacion:"Scarification",
            microdermal:"Piercing microdermal",
            bifurcacion:"bifurcation language",
            piercing:"Piercing",
            reconstruccion:"lobe reconstruction",
            filtrar:"Filter",
            textoFiltro1:"Find the best artists and body modifiers , quickly and easily.",
            textoFiltro2:"You can search on any of the following filters , or you can leave blank filters and search all artists.",
            estilo:"Style",
            ciudad:"Country",
            mostrarAnalisis:"Show analysis",
            textoAnalisis:"If you enable the 'Show analysis', we will give a brief overview of average number of hours , number of sessions and intensity of pain based on the information you provide us .",
            ancho:"width CM",
            alto:"high CM",
            regla:"Rule",
            zona:"Zone",
            buscarCodigo:"Find by code",
            escribeCodigo:"Write artist code",
            mostrarResultado:"Show result",
            resultadoAnalisisTexto:"Result analysis for a Tattoo",
            tiempoPorSesion:"Time of session:",
            cantidadSesiones:"Number of sessions:",
            intensidadDolor:"Pain intensity:",
            ubicacion:"Location",
            especialidad:"Specialty:",
            algoSobreMi:"About me",
            portafolio:"portfolio",
            contacto:"Contact"



        });
        $translateProvider.translations('es', {
            buscarArtistas: "Buscar artistas",
            Eventos: "Eventos",
            estilosTatuaje :"Estilos tatuaje",
            multimedia :"Multimedia & Streaming",
            estudios: "Estudios",
            promociones:"Promociones",
            bocetos:"Bocetos",
            procedimientos:"tipos de procedimiento",
            recuperacion:"Recuperación",
            dolimetro:"Dolímetro",
            ayuda:"Ayuda",
            denunciar:"Denunciar",
            codigoArtista:"Código artista",
            tatuaje:"Tatuaje",
            coverUp:"Cover up",
            remocion:"Remoción",
            escarificacion:"Escarificación",
            microdermal:"Piercing microdermal",
            bifurcacion:"Bifurcación de lengua",
            piercing:"Piercing",
            reconstruccion:"Reconstrucción de lobulo",
            filtrar:"Filtrar",
            textoFiltro1:"Encuentra los mejores artistas y modificadores corporales, de forma rápida y sencilla.",
            textoFiltro2:"Puedes realizar la búsqueda por alguno de los siguientes filtros, o puedes dejar los filtros en blanco y buscar todos los artistas.",
            estilo:"Estilo",
            ciudad:"Ciudad",
            mostrarAnalisis:"Mostrar análisis",
            textoAnalisis:"  Si habilitas la opción 'Mostrar análisis', te daremos una breve reseña sobre un promedio de duracion  en horas, cantidad de sesiones e intensidad de dolor en base a la información que nos suministres.",
            ancho:"Ancho CM",
            alto:"Alto CM",
            regla:"Regla",
            zona:"Zona",
            buscarCodigo:"Buscar por código",
            escribeCodigo:"Escribe código artista",
            mostrarResultado:"Mostrar resultado",
            resultadoAnalisisTexto:" Resultado análisis para un tatuaje de ",
            tiempoPorSesion:"Tiempo por sesion:",
            cantidadSesiones:"Cantidad de sesiones:",
            intensidadDolor:"Intensidad de dolor:",
            ubicacion:"Ubicación:",
            especialidad:"Especialidad:",
            algoSobreMi:"Algo sobre mi",
             portafolio:"Portafolio",
             contacto:"Contacto"



        });
        $translateProvider.preferredLanguage("es");
        $translateProvider.fallbackLanguage("es");
    })
.config(['$ionicAppProvider', function($ionicAppProvider) {

 
    var io  = Ionic.io();
    var push = new Ionic.Push({
        "onNotification":function(notification){
          alert("COrrecto") ;

        },
        "pluginConfig":{
          "android":{
            "iconColor":"#0000ff"
          }
        }
    });
    var user = Ionic.User.current();
    if(!user.id){
      user.id = Ionic.User.anonymousId();
    }
    user.set('name','steven');
    user.set('bio','sirve');
    user.save();

    var callback = function(){

      push.addTokenToUser(user);
      console.log("device token 1:  " + push._token.token);
      //alert("device token 1:  " + push._token.token);
      user.save();

    }
     //Ionic.User.current(user);
      push.register(callback);
    
/*  $ionicAppProvider.identify({
    app_id: 'dd47acc0',
    api_key: 'AIzaSyA58wrDr0o_p-BLUqimynrR59NtUAnFRCQ',
    // dev_push: true,
    gcm_id: '663041379583'
   
  });*/
}])

.config(function($stateProvider, $urlRouterProvider) {

   

  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.intro', {
    url: '/intro',
    views: {
      'menuContent': {
         templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
      }
    }
   
  })

 

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
        
      }
    }
  })
  .state('app.eventos', {
    url: "/eventos",
    views: {
      'menuContent': {
        templateUrl: "templates/eventos.html",
        controller: 'EventosController'
      }
    }
  })
 .state('app.publicidad', {
    url: "/publicidad",
    views: {
      'menuContent': {
        templateUrl: "templates/publicidad.html",
        controller: 'PublicidadController'
      }
    }
  })

  .state('app.push', {
    url: "/push",
    views: {
      'menuContent': {
        templateUrl: "templates/push.html",
        controller: 'indexController'
      }
    }
  })
   .state('app.promociones', {
    url: "/promociones",
    views: {
      'menuContent': {
        templateUrl: "templates/promociones.html",
        controller: 'PromocionesController'
      }
    }
  })
   
    .state('app.bocetos', {
    url: "/bocetos",
    views: {
      'menuContent': {
        templateUrl: "templates/bocetos.html",
        controller: 'BocetosController'
      }
    }
  })
      .state('app.multimedia', {
    url: "/multimedia",
    views: {
      'menuContent': {
        templateUrl: "templates/multimedia.html",
        controller: 'MultimediaController'
      }
    }
  })
  .state('app.ayuda', {
    url: "/ayuda",
    views: {
      'menuContent': {
        templateUrl: "templates/ayuda.html"
        
      }
    }
  })
  .state('app.recuperacion', {
    url: "/recuperacion",
    views: {
      'menuContent': {
        templateUrl: "templates/recuperacion.html"
        
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
     .state('app.estilos', {
      url: "/estilos",
      views: {
        'menuContent': {
          templateUrl: "templates/estilosInfo.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.tipoProcedimiento', {
      url: "/tipoProcedimiento",
      views: {
        'menuContent': {
          templateUrl: "templates/tipoProcedimiento.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

     .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistsCtrl'
      }
    }
  }) 
     .state('app.opcionesBusqueda', {
      url: "/opcionesBusqueda",
      views: {
        'menuContent': {
          templateUrl: "templates/opcionesBusqueda.html",
          controller: 'indexController'
        }
      }
    })
     .state('app.denunciar', {
      url: "/denunciar",
      views: {
        'menuContent': {
          templateUrl: "templates/denunciar.html",
          controller: 'indexController'
        }
      }
    })
     .state('app.artistas', {
      url: "/artistas",
    //  cache : false,
      views: {
        'menuContent': {
          templateUrl: "templates/artistas.html",
          controller: 'indexController'
        }
      }
    })
   

 

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/ayuda');
});


