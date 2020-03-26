'use strict';

const app = angular.module('nationsApp',[]);

app.controller('randomizer', function($scope) {
    $scope.playerAmount = 3;
    $scope.poolNations = [];
    $scope.chosenNations = [];
    $scope.exclusionList = [];

    //Core nations:
    $scope.nationsCore = [
        ["Persia","Persia"],
        ["China","China"],
        ["Rome","Rome"],
        ["Greece","Greece"],
        ["Egypt","Egypt"]
    ];

    //Dynasties expansion:
    $scope.nationsDyna = [
        ["Mongolia","Portugal"],
        ["Venice","Korea"],
        ["Ethiopia","Poland"],
        ["Mali","India"],
        ["Arabs","America"],
        ["Japan","Vikings"]
    ];

    //Sets checked
    $scope.coreCheck = true;
    $scope.dynaCheck = true;

    //Randomizer
    $scope.randomizer = function() {
        $scope.poolNations = [];
        $scope.chosenNations = [];

        if($scope.coreCheck) {
            for(let i = 0; i < $scope.nationsCore.length; i++) {
                $scope.poolNations.push($scope.nationsCore[i]);
            }
        }

        if($scope.dynaCheck) {
            for(let k = 0; k < $scope.nationsDyna.length; i++) {
                $scope.poolNations.push($scope.nationsDyna[k]);
            }
        }

        const len = $scope.poolNations.length;

        //return if the array is empty
        if(len === 0) return;

        let already = false;
        let nat = "";
        let rand = 0;

        do {
            rand = Math.floor(Math.random()*len);
            nat = $scope.poolNations[rand];
            already = false;
            for(var j = 0; j < $scope.chosenNations.length; j++) {
                if($scope.chosenNations[j] === nat) {
                    already = true;
                    break;
                }
            }
            if(already) continue;

            $scope.chosenNations.push(nat);
        }
        while($scope.chosenNations.length < $scope.playerAmount);

        $scope.chosenNations = extraRandom($scope.chosenNations);
    };

    function extraRandom(nationPairs) {
        const nations = [];
        for(let i = 0; i < nationPairs.length; i++) {
            const rand = Math.floor(Math.random()*2);
            nations.push(nationPairs[i][rand]);
        }
        nations.sort();
        return nations;
    }
});