(function() {
    'use strict';
    var sca = angular.module('sca-shared.menu', []);

    sca.constant('scaSharedConfig', {
        shared_url: '/shared',  //path to shared ui resources (defaults to "../shared")
    });

    //shoudn't be used anymore
    sca.constant('scaMenu', []);

    sca.constant('scaSettingsMenu', [
/*		
        {
            id: "profile",
            label: "Profile",
            url: "/profile",
            show: function(scope) {
                if(~scope.brainlife.indexOf('user')) return true;
                return false;
            }
        },
*/
        {
            id: "account",
            label: "Account",
            url: "/auth/#!/settings/account",
            show: function(scope) {
                if(~scope.brainlife.indexOf('user')) return true;
                return false;
            }
        },
	/*
        {
            id: "resources",
            label: "Resources",
            url: "/amaretti/#!/resources",
            show: function(scope) {
                if(~scope.brainlife.indexOf('user')) return true;
                return false;
            }
        },
	*/
        {
            id: "groups",
            label: "Groups",
            url: "/auth/#!/groups",
	    //non-admin has group api access, but let's make this hidden for now.
            show: function(scope) {
                if(~scope.auth.indexOf('admin')) return true;
                return false;
	    }
        },
        {
            id: "users",
            label: "Users",
            url: "/auth/#!/admin/users",
            show: function(scope) {
                if(~scope.auth.indexOf('admin')) return true;
                return false;
            },
        },
        {
            id: "signout",
            label: "Signout",
            pullright: true,
            url: "/auth/#!/signout",
        },
    ]);

    sca.constant('scaAdminMenu', [
        {
            id: "adminusers",
            label: "Users",
            url: "/auth/#!/admin/users",
            show: function(scope) {
                if(~scope.auth.indexOf('admin')) return true;
                return false;
            }
        },
    ]);

})();
