# Write your contract deployment script here.
from brownie import Bank, accounts

def main():
    Bank.deploy({'from': accounts[0]})