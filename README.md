
# PROFFER HACKATHON : Valkey
This repository contains the source code for Valkey web app
# What's going on here?
What is Valkey?

Valkey, is a Self Sovereign Identity build on Aadhar. In simple terms it is a digital Id created by combining the decentralized blockchain principle with identity verification, provides secure identity management, integrated with fingerprint and other biometry on personal devices. 

How it helps?

Centralized management of identities and KYC data is overwhelmed with so many disadvantages and security challenges that it is becoming a subject of serious concern especially in the age of wannacry and equifax hacks as most of the public data are usually stored in centralized servers with large storage capacity. Therefore, crucial information of a lot of people are held in one place. This exposes such stored data to a lot of risk.

Imagine a world where you are in direct control of your personal information, a world where you can limit and control how much information you share while retaining the ability to transact in the world. This is self-sovereign identity and It ensures privacy and trust, where transactions are secure, authenticated and verifiable and endorsed by relevant, permissioned participants.

How it Works?

![valkey 1](https://user-images.githubusercontent.com/13939119/32712202-4c118444-c869-11e7-85d5-81ef9858c3aa.png)

1. Valkey Authentication: Valkey uses Aadhaar for authentication of user by taking his biometrics, once verified it generates a primary key. Valkey pushes the verified identity data to the user's Valkey App and attestations to the blockchain.

2.Third-Party Data Verification: Leveraging the Valkey Secure Identity Platform APIs or SDKs, a Valkey Identity Partner with Valkey technologies may provide users with verified identity data (including pushing verified data to the Valkey app and attestations to the blockchain). Since the Identity Requestor still defines the requirements for identity validation, Valkey can work with a range of Identity Partners to establish various levels of trust, including strong multi-factor authentication across multiple Identity Partners. Identity partners can be Government, Banks and even employers. For initial verification we have used Aadhar as Identity partner as it widely spread and captures biometric data.

# USE CASE
Though Valkey can be used in lot of situations from passwordless login, Identity verification, healthcare to improving customers travelling. We have chosen credit score as an example to relate it to current Equifax hack and how we can build resilient systems especially in the age where Government is asking to link everything to Aadhaar and making it a honeypot to hackers. The credit score can be linked to Valkey and updated by the banks. When a third party lender or bank wants to access credit score they will send request to customer who authenticates it with his/he biometrics to send credit score to third party requesters. Apart from security, this system can also serve a lot of unbanked and underbanked people who don’t fall under credit system and also for cross border credit systems.

# What Next For Valkey?
Valkey is currently under research at Valley labs which is backed by Asian Development bank,IBM and Seoul Metropolitan City to address SDG using AI, conversational interfaces and communities. We believe Valkey will play a major role in building trust over internet and implement every SDG initiatives more efficiently. With Government support Valkey can become a Global ID and build a marketplace for this new type of identity verification.

# Team
Manikanta Raju,
Praveen Anasurya
