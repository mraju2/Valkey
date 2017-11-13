var Web3;
var web3;
var crowdfunder;
var customers = Array();
$(document).ready(function() {
    Web3 = require('web3');
    web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
    var accounts = web3.eth.accounts;
    accounts.forEach(function(v) {
        $("#supportFrom").append("<option val=\"" + v + "\">" + v + "</option>");
        $("#projectAddr").append("<option val=\"" + v + "\">" + v + "</option>");
    });
    var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"b","type":"address"}],"name":"getSSID","outputs":[{"name":"","type":"uint64"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"address"}],"name":"getAadhar","outputs":[{"name":"","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"aadharNumber","type":"uint64"}],"name":"add","outputs":[{"name":"","type":"uint64"}],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]');
    var contract = web3.eth.contract(abi);
    crowdfunder = contract.at('0x569a6bae29698b1e9a5531969c68936971f9ec02');
    document.getElementById('Add').value = '0x569a6bae29698b1e9a5531969c68936971f9ec02';
    web3.eth.getBalance("0x569a6bae29698b1e9a5531969c68936971f9ec02", function(error, result) {
        if (!error) {
            document.getElementById('bal').value = result.c[0];
        } else
            document.getElementById('bal').value = error
    });
});

$("#scanbtn").click(function() {
    
    document.getElementById("bio").src="aadhar.jpg";
});

$("#submitBtn").click(function() {
    crowdfunder.add.sendTransaction(parseInt($("#aadnum").val()), {
        from: $("#projectAddr").val(),
        value:1 ,
        gas: 600000,
    }, function(err, data) {
        console.log(data);
        document.getElementById('txn').value = data;
        if (err) {
            console.error(err);
        }
    });
});


$("#finishBtn").click(function() {
    customers = new Array();
    tats = new Array();
    crowdfunder.getLength(function(err, data) {
        console.log("1");
        for (var j = 0; j <= data.c[0] - 1; j++) {
            crowdfunder.getAddress(j, function(err1, data1) {
                console.log("2" + data1);
                address.push(data1);
                crowdfunder.getA(data1, function(err2, data2) {
                    console.log("3");
                    customers.push([data1, data2[0].c[0], data2[1].c[0],"OUT"]);
                    if(j=data.c[0] - 1)
                        {
                            GenerateTable();
                        }
                    if (err2) {
                        console.error(err2);
                    }
                });
                if (err) {
                    console.error(err1);
                }

            })
        }
        console.log("Finish")
    })
   
});










