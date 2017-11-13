pragma solidity ^0.4.0;

// add call guard
// add schedule
// add withdraw

//Declaration of SelfSoverign
contract SelfSoverign {
    struct Aadhar {
        uint64 aadhar;
    } 
    
    //Store user profile data
    struct Rankings {
        uint64 ssid;
        uint64 CreditScore;
    } 
    
    mapping(address => Aadhar) aadhars; //mapping of private address to aadhar structure 
    //at present only aadhar number is stored , we can add many more to that
    mapping(address => uint64) ssids;//mapping of new ssids with address
    address owner;
    function SelfSoverign() {
        owner = msg.sender;
    }
    //add aadharNumber to struct and link address 
    //a address(user) has aadharNumber ssids
    function add(uint64 aadharNumber) payable returns(uint64)  {
    address user=msg.sender;
        aadhars[user] = Aadhar({
            aadhar: aadharNumber
        });
        //at present new ssid is sum of aadhar n umbers
        //later we can change the logic to map ssids to address
        ssids[user]=aadharNumber+aadharNumber;
        return ssids[user];
    }
    //Get SSID based on address(user)
    function getSSID(address b) constant returns(uint64)
    {
        return ssids[b];
    }
    //Get aadharNumber based on address(user)
    function getAadhar(address i) constant returns(uint64)
    {
        return aadhars[i].aadhar;
    }

}
