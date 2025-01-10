// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank{

    mapping(address => uint256) private account_balances;
    mapping(address => uint[]) private blocks; //transaction history

    function deposit_funds() public payable {
        require(msg.value > 0, "You must deposit funds that total more than 0");
        
        account_balances[msg.sender] += msg.value;
        blocks[msg.sender].push(block.number);
    }

    function withdraw_funds(uint256 _funds) public {
        require(account_balances[msg.sender] >= _funds, "Not enough funds to withdraw");

        account_balances[msg.sender] -= _funds;

        (bool success, ) = msg.sender.call{value: _funds}("Amount Withdrawn");
        require(success, "Insufficient Funds");
        blocks[msg.sender].push(block.number);
    }

    function transfer_funds(address recieving_address, uint256 _funds) public {
        require(account_balances[msg.sender] >= _funds, "Not enough funds to transfer");

        account_balances[msg.sender] -= _funds;
        account_balances[recieving_address] += _funds;

        blocks[msg.sender].push(block.number);
        blocks[recieving_address].push(block.number);
    }

    function get_balance() public view returns(uint256){
        return account_balances[msg.sender];
    }

    function get_blocks() public view returns(uint[] memory){
        return blocks[msg.sender];
    }
}