// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'transap', 'ngCordova'])

.run(function($ionicPlatform) {
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
    Ionic.io(); 
    
    var push = new Ionic.Push({
      "debug": true
    });

    push.register(function(token) {
      console.log("Device token:",token.token);
    });
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menus/menu.html',
    controller: 'AppCtrl'
  })
  
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })
  
  
  /******************************************* Enlace ************************/
  .state('enlace', {
    url: '/enlace',
    abstract: true,
    templateUrl: 'templates/menus/menuEnlaceT.html'
  })
  
  
  .state('enlace.seguimiento', {
    url: '/seguimiento',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/enlace/enlace.html',
        controller: 'enlaceCtrl'
      }
    }
  })
  /*************************************************************************/
  
  
  /******************************************* Azul ************************/
  .state('azul', {
    url: '/azul',
    abstract: true,
    templateUrl: 'templates/menus/menuAzul.html'
  })
  
  
  .state('azul.argumentos', {
    url: '/argumentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/azul/Argumentos.html',
      }
    }
  })
    
    .state('azul.definicion', {
      url: '/definicion',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/azul/Definicion.html',
        }
      }
    })
    
    .state('azul.funcionamiento', {
      url: '/funcionamiento',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/azul/Funcionamiento.html',
        }
      }
    })
    
    .state('azul.modalidades', {
      url: '/modalidades',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/azul/Modalidades.html',
        }
      }
    })
    
    .state('azul.tarifas', {
      url: '/tarifas',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/azul/Tarifas.html',
        }
      }
    })
  
  /*************************************************************************/
  
  /******************************************* Concentradora ************************/
  .state('cuentas_concentradora', {
    url: '/cuentas_concentradora',
    abstract: true,
    templateUrl: 'templates/menus/menuCuentas.html'
  })
  
  
  .state('cuentas_concentradora.argumentos', {
    url: '/argumentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/cuentas/concentradora/Argumentos.html',
      }
    }
  })
    
    .state('cuentas_concentradora.definicion', {
      url: '/definicion',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/cuentas/concentradora/Definicion.html',
        }
      }
    })
    
    .state('cuentas_concentradora.funcionamiento', {
      url: '/funcionamiento',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/cuentas/concentradora/Funcionamiento.html',
        }
      }
    })
    
    .state('cuentas_concentradora.modalidades', {
      url: '/modalidades',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/cuentas/concentradora/Modalidades.html',
        }
      }
    })
    
    .state('cuentas_concentradora.tarifas', {
      url: '/tarifas',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/cuentas/concentradora/Tarifas.html',
        }
      }
    })
  
  /*************************************************************************/
  
  /******************************************* Indicadores ************************/
  .state('indicadores', {
    url: '/indicadores',
    abstract: true,
    templateUrl: 'templates/menus/menuIndicadores.html'
  })
  
  
  .state('indicadores.indicadores', {
    url: '/indicadores',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/indicadores/indicadores.html',
      }
    }
  })
  /*************************************************************************/
  
  
  /******************************************* Pagos ************************/
  .state('pagos', {
    url: '/pagos',
    abstract: true,
    templateUrl: 'templates/menus/menuPagos.html'
  })
  
  
  .state('pagos.chequesargumentos', {
    url: '/chequesargumentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/pagos/cheques/Argumentos.html',
      }
    }
  })
    
    .state('pagos.chequesdefinicion', {
      url: '/chequesdefinicion',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/cheques/Definicion.html',
        }
      }
    })
    
    .state('pagos.chequesfuncionamiento', {
      url: '/chequesfuncionamiento',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/cheques/Funcionamiento.html',
        }
      }
    })
    
    .state('pagos.chequesmodalidades', {
      url: '/chequesmodalidades',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/cheques/Modalidades.html',
        }
      }
    })
    
    .state('pagos.chequestarifas', {
      url: '/chequestarifas',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/cheques/Tarifas.html',
        }
      }
    })
    
    
    /*Confirming*/
    
    .state('pagos.confirmingargumentos', {
    url: '/confirmingargumentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/pagos/confirming/Argumentos.html',
      }
    }
  })
    
    .state('pagos.confirmingdefinicion', {
      url: '/confirmingdefinicion',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/confirming/Definicion.html',
        }
      }
    })
    
    .state('pagos.confirmingfuncionamiento', {
      url: '/confirmingfuncionamiento',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/confirming/Funcionamiento.html',
        }
      }
    })
    
    .state('pagos.confirmingmodalidades', {
      url: '/confirmingmodalidades',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/confirming/Modalidades.html',
        }
      }
    })
    
    .state('pagos.confirmingtarifas', {
      url: '/confirmingtarifas',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/confirming/Tarifas.html',
        }
      }
    })
    
    
    /*Electronicos*/
    
    .state('pagos.electronicosargumentos', {
    url: '/electronicosargumentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/pagos/electronicos/Argumentos.html',
      }
    }
  })
    
    .state('pagos.electronicosdefinicion', {
      url: '/electronicosdefinicion',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/electronicos/Definicion.html',
        }
      }
    })
    
    .state('pagos.electronicosfuncionamiento', {
      url: '/electronicosfuncionamiento',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/electronicos/Funcionamiento.html',
        }
      }
    })
    
    .state('pagos.electronicosmodalidades', {
      url: '/electronicosmodalidades',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/electronicos/Modalidades.html',
        }
      }
    })
    
    .state('pagos.electronicostarifas', {
      url: '/electronicostarifas',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/pagos/electronicos/Tarifas.html',
        }
      }
    })
  
  /*************************************************************************/
    
  /******************************************* Azul ************************/
  .state('recaudos', {
    url: '/recaudos',
    abstract: true,
    templateUrl: 'templates/menus/menuRecaudos.html'
  })
  
  
  .state('recaudos.referenciadoargumentos', {
    url: '/referenciadoargumentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/recaudos/referenciado/Argumentos.html',
      }
    }
  })
    
    .state('recaudos.referenciadofuncionamiento', {
      url: '/referenciadofuncionamiento',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/recaudos/referenciado/Funcionamiento.html',
        }
      }
    })
    
    .state('recaudos.referenciadomodalidades', {
      url: '/referenciadomodalidades',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/recaudos/referenciado/Modalidades.html',
        }
      }
    })
    
    .state('recaudos.referenciado', {
      url: '/referenciado',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/recaudos/referenciado/Referenciado.html',
        }
      }
    })
    
    .state('recaudos.referenciadotarifas', {
      url: '/referenciadotarifas',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/recaudos/referenciado/Tarifas.html',
        }
      }
    })
    
    /* Transporte */
    
    .state('recaudos.transporteargumentos', {
    url: '/transporteargumentos',
    views: {
      'menuContent': {
        templateUrl: 'templates/corpbanca/recaudos/transporte/Argumentos.html',
      }
    }
  })
    
    .state('recaudos.transportefuncionamiento', {
      url: '/transportefuncionamiento',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/recaudos/transporte/Funcionamiento.html',
        }
      }
    })
    
    .state('recaudos.transportemodalidades', {
      url: '/transportemodalidades',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/recaudos/transporte/Modalidades.html',
        }
      }
    })
    
    .state('recaudos.transporte', {
      url: '/transporte',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/recaudos/transporte/transporte.html',
        }
      }
    })
    
    .state('recaudos.transportetarifas', {
      url: '/transportetarifas',
      views: {
        'menuContent': {
          templateUrl: 'templates/corpbanca/recaudos/transporte/Tarifas.html',
        }
      }
    })
  
  /*************************************************************************/
    
    
    
  .state('app.push',{
    url : '/push',
    views :{
      'menuContent' :{
        templateUrl: 'templates/push.html',
        controller: 'PushController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
