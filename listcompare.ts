/**
 * Compare two lists of objects and find items that exist in only one list
 * @param {Array} list1 - First list of objects
 * @param {Array} list2 - Second list of objects
 * @param {string} uniqueKey - The property to use as unique identifier (e.g., 'id', 'loginId')
 * @returns {Object} Object containing items unique to each list
 */
function findUniqueItems(list1, list2, uniqueKey = 'id') {
  // Create Sets of IDs for efficient lookup
  const ids1 = new Set(list1.map(item => item[uniqueKey]));
  const ids2 = new Set(list2.map(item => item[uniqueKey]));

  // Find items in list1 but not in list2
  const onlyInList1 = list1.filter(item => !ids2.has(item[uniqueKey]));

  // Find items in list2 but not in list1
  const onlyInList2 = list2.filter(item => !ids1.has(item[uniqueKey]));

  return {
    onlyInList1,
    onlyInList2,
    summary: {
      totalInList1: list1.length,
      totalInList2: list2.length,
      uniqueToList1: onlyInList1.length,
      uniqueToList2: onlyInList2.length,
      commonItems: ids1.size - onlyInList1.length
    }
  };
}

/**
 * Example usage with au pair profiles
 */
const list1 = [
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Laid-back",
                "Organized",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-04-13",
            "excludeFromHfId": [
                "64084438-f021-70bc-5c2f-c160a2b171ad"
            ],
            "siblings": "1 sibling",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "64083498-d081-70ee-b753-83816d4a1462",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, future host family,\n\nMy name is Natali, and I'm excited to join you as a part of your family. I can't wait for this new journey! Let me share a bit about myself. I consider myself a dedicated and responsible person, passionate about exploring new places and cultures. Since my adolescence, traveling to different states in my country has been a source of discoveries and an opportunity to understand cultural diversities, making me more adaptable and open to new experiences. I'm thrilled to share my Brazilian culture with you, from our cuisine to our family traditions and customs, and learn more about American culture.\n\nI recently graduated in Architecture and Urbanism, an area that boosted my creativity, strengthened my perception and attention, and broadened my understanding of people and their lives.\n\nMy love for children started in childhood, spending days at my grandmother's farm, gathering the little ones to play and tell stories. My grandmother affectionately called us the \"Natali's daycare,\" where we created special moments and valuable lessons. Moreover, I had the privilege of caring for Lara, an incredible and bright girl, for five years. During that time, we played, explored imaginary stories, went for walks together, and even cooked small recipes. I also assisted her with school activities and hygiene. It was a constant learning experience, especially due to the affectionate and reliable connection we developed.\n\nAfter learning about the au pair program, I decided to volunteer at a school to have more contact with the children's world and also to observe how professionals in the field handle different situations involving childcare. At the school, I interacted with children of different ages and needs, including those with special needs, where I learned and grew alongside the children. This experience taught me the importance of listening to each child, fostering a loving and inclusive environment for their development.\n\nIt's gratifying for me to witness and participate in the growth and development of children. I'm eager to create a loving and supportive environment for your children, as well as providing enjoyable and educational moments. I want to become an au pair to establish a meaningful connection with your children, being an older sister and supporting them in their growth. I want to share my experiences, offer my time, and integrate into your family's dynamics. I'm here to learn and also to contribute positively to all of your lives, creating new memories together.\n\nWith love,\nNatali",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-13T17:28:34.087Z",
            "score": 80,
            "opportunityId": "006R700000hgnDGIAY",
            "auPairName": "Natali",
            "id": "64083498-d081-70ee-b753-83816d4a1462",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:19:30.332Z",
            "lastAppLoginDate": "2026-04-29T01:19:30.325Z",
            "spotlightedReason": null,
            "approvedIQHours": 800,
            "profilePictureKey": "protected/64083498-d081-70ee-b753-83816d4a1462/6d1e71f9-729b-4273-8066-928aef2789f0.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA11930871",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 5120,
            "duration": "<6 months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": "2027-01-07",
            "auPairType": "Rematch AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-07-31",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "4+ children"
            ],
            "dateOfBirth": "1999-12-25",
            "monthsLeft": 5,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "California",
            "religion": "Christian",
            "statePreference": [
                "All states"
            ],
            "latestTravelDate": "2026-08-27",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Drawing",
                "Makeup",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000EMeV5IAL",
            "totalNumberOfChats": 117,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": true,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64083498-d081-70ee-b753-83816d4a1462/6d1e71f9-729b-4273-8066-928aef2789f0.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDA4MzQ5OC1kMDgxLTcwZWUtYjc1My04MzgxNmQ0YTE0NjIvNmQxZTcxZjktNzI5Yi00MjczLTgwNjYtOTI4YWVmMjc4OWYwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gst~J~wd9oNZMZXNPJ86ldrOLQkhl2soBA19pJUm6UGm4IcIOT5AChudn6ymnBR-7nDE1qFNhYJeAaRQBx2ZlFbKvcKX6suWTZ7vYGRYXw4L5QbghKbgPmo0MmYdRZucBRu4ERjmlnGuikLYysAiQbEqcY9Wl3ndLusx9eaa70nnncroJG5ix6XjzcuREjtkumLiinwJvcBSexEPPI6RqyT2qOdhAe3nzlA7HS42NGOqUG-8Hab~2ZytqmZFDdJqUzijp-NyfUcWrly7tR8aOJgAHMT2pjii35-GPeStBVYOdzpmwMKrUN-gHPhRTH2oP~E1d59uYYTBmQxbdYlsiw__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "04089428-6071-70c7-f329-a477e27f96d9",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello ✨I’m a person who likes walks, energetic, listen music, have adventures, describe new things, get to now new places, lovely whit animals and kids",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T18:05:48.153Z",
            "score": 64,
            "opportunityId": "006R700000bUQcTIAW",
            "auPairName": "Caro",
            "id": "04089428-6071-70c7-f329-a477e27f96d9",
            "relaxingInterests": [
                "Card games",
                "Gaming",
                "Movies"
            ],
            "updatedAt": "2026-04-29T01:25:55.682Z",
            "lastAppLoginDate": "2026-04-29T01:25:55.679Z",
            "spotlightedReason": null,
            "approvedIQHours": 1414.2,
            "profilePictureKey": "protected/04089428-6071-70c7-f329-a477e27f96d9/dddfdeac-b551-47ed-9639-abf43d01dcbb.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2309095",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7020,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-10-05",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-08-28",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Makeup"
            ],
            "sfId": "001R700000hZPXRIA4",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/04089428-6071-70c7-f329-a477e27f96d9/dddfdeac-b551-47ed-9639-abf43d01dcbb.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNDA4OTQyOC02MDcxLTcwYzctZjMyOS1hNDc3ZTI3Zjk2ZDkvZGRkZmRlYWMtYjU1MS00N2VkLTk2MzktYWJmNDNkMDFkY2JiLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=CmBGit34EMt81j0o00hAj4zw1o1QPqcVDxZZ4nBrNJU9fiZNmyUWOdmaf90TR0dQi6oijIov-F2nn~SH1dBumuYDam1y4GDx0TGa5f4mbAy3r42F4SRegiAN~shMJp-uu4kbdKDyMqe5n6f8hSyAw1YAdQbprTWFSEGEtPZ1fb3qQMaQHdOfiRXp6yuhwCF1l5z60OdIu2cygvxue~Qj~2SCOx2OSDxt-cT4dE1-hZBv80T4smZBb~EtS7qQMBEI4uQNASNtL5VjXiF5QQU3egmktqMPa3fAS~eS3HvrVcuF~KM~MkE13vqNsTg9CBdqZC-cPcH0zK6zjrUpjrJkUw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2026-03-06",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University",
                "University"
            ],
            "loginId": "043874f8-4081-70f0-529f-153212003936",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Angie. I am a kind, responsible, and positive person. I enjoy spending time with my family and creating a calm and happy environment. I like listening to music, going for walks, and trying new things. I consider myself patient, organized, and respectful. I am open-minded and enjoy learning about different cultures. I always try to give my best and keep a good attitude in everything I do.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-06T23:01:02.833Z",
            "score": 64,
            "opportunityId": "006R700000ZUs5GIAT",
            "auPairName": "Angie",
            "id": "043874f8-4081-70f0-529f-153212003936",
            "relaxingInterests": [],
            "updatedAt": "2026-04-29T00:11:18.054Z",
            "lastAppLoginDate": "2026-04-29T00:11:18.050Z",
            "spotlightedReason": null,
            "approvedIQHours": 390.96,
            "profilePictureKey": "protected/043874f8-4081-70f0-529f-153212003936/8881c886-42e2-43b2-bde1-ff73c71ef71a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL13998271",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 390.96,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-11-14",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000EHqB8IAL",
            "totalNumberOfChats": 19,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/043874f8-4081-70f0-529f-153212003936/8881c886-42e2-43b2-bde1-ff73c71ef71a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNDM4NzRmOC00MDgxLTcwZjAtNTI5Zi0xNTMyMTIwMDM5MzYvODg4MWM4ODYtNDJlMi00M2IyLWJkZTEtZmY3M2M3MWVmNzFhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=QO5SwL7Yy4rNcdlIKVaOEEo-LrPZ8ZbvgRIWYggTbmtMsBWoOVn56aXJK~TORHTRLEjiQlfcFVMBXzR1MghVvUgDJJa1Dhq5zrowWFejkAAexOj~CgWEemnoWnOxpvLp54IeqdZD2q1hYe~-VKAAyiUcI2vC-NL9PX-ASpchja1FpYkAMuYjKJdYSsG0M3JZCakLmXhxnQ14TuloiPbj-NPx5RfHDz6Aqa56XwHz0Ii4Qeg6gSXdORD9wh2cKR4bbM9yBQIAfM6oa-JF-A77N~bi5GSC25PChehxWzCQXAl9yKvAaYumPaIyCOWZ4YPI3tfHRkREZpdCnRgpwWn8jA__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-01-27",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "0438b408-8051-70f3-f257-b2b3e06ab133",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, dear host family! My name is Dhamilly, I am 22 years old and I am from Brazil. I have experience taking care of children of different ages. I started looking after my nephew when he was a newborn, and I have also cared for three other children between 1 and 6 years old. I really enjoy creating fun and educational activities, such as reading, drawing, outdoor play and learning games.\n\nI am a patient, caring and organized person, and I always try to make children feel safe, loved and happy.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-27T21:01:50.795Z",
            "score": 64,
            "opportunityId": "006R700000Tg7sSIAR",
            "auPairName": "Dhamilly",
            "id": "0438b408-8051-70f3-f257-b2b3e06ab133",
            "relaxingInterests": [
                "Gardening",
                "Movies",
                "Reading"
            ],
            "updatedAt": "2026-04-29T00:04:42.883Z",
            "lastAppLoginDate": "2026-04-28T21:32:10.475Z",
            "spotlightedReason": null,
            "approvedIQHours": 1750,
            "profilePictureKey": "protected/0438b408-8051-70f3-f257-b2b3e06ab133/aa3f56b0-98f6-4cd3-bb92-f71d234ed11a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2230989",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6275.8,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-07-12",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Photography"
            ],
            "sfId": "001R700000Y8iQ7IAJ",
            "totalNumberOfChats": 33,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/0438b408-8051-70f3-f257-b2b3e06ab133/aa3f56b0-98f6-4cd3-bb92-f71d234ed11a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNDM4YjQwOC04MDUxLTcwZjMtZjI1Ny1iMmIzZTA2YWIxMzMvYWEzZjU2YjAtOThmNi00Y2QzLWJiOTItZjcxZDIzNGVkMTFhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=OteDl0ZdWJEKS-U6xbXek4-oUZxlCuF0s2FSEYxpk-WvEQGlua-SIz9mnVT-uS6XeTfgZl5FJjNBDHKfdqrwQXWdXmKghZjXiptnIkpnn4jJSFd7ESaHO2cCSNp~mwQGuGmuqv1MuCxErZh6FFA26Jsm51Y0eGaU6jmMUkOFvqfWtvzD7vlZxGm0W~ezo84nGrBYIb5Kze7wjMOXOCaeMk0WPQ4hl9SucuVMnP1OErV3K80-xKTJlOwTSB-eSNUY3aIN9R6eEEeiqpX9QbNh~-MxoG2DWMPDOxbv3gPjDBOfaIXYr2xMI8MauZzhOLr~LJ6PrT2OQH6IFdbil5byhw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Intellectual",
                "Laid-back",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "04582418-e041-7037-09a0-51d8608f177d",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, dear host family!\n I am Yuliana, I am 22 years old and I am Colombian. I consider myself a cheerful, caring, and genuine person who enjoys the simple things in life. I like constantly learning, spending quality time with my family, and staying active through sports and outdoor activities. I love nature, animals, and discovering new places. I am known for being responsible, empathetic, and positive, and I always try to create special moments with the people around me.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-30T18:48:28.002Z",
            "score": 64,
            "opportunityId": "006R700000g0jMwIAI",
            "auPairName": "Yuliana Morales",
            "id": "04582418-e041-7037-09a0-51d8608f177d",
            "relaxingInterests": [
                "Camping",
                "Meditation",
                "Movies",
                "Reading",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:21:01.952Z",
            "lastAppLoginDate": "2026-04-29T00:21:01.947Z",
            "spotlightedReason": null,
            "approvedIQHours": 208,
            "profilePictureKey": "protected/04582418-e041-7037-09a0-51d8608f177d/fedb11b5-0599-46e7-a553-82353e71e193.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2379568",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1168,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-06-13",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cycling",
                "Soccer",
                "Table tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000miFnkIAE",
            "totalNumberOfChats": 27,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/04582418-e041-7037-09a0-51d8608f177d/fedb11b5-0599-46e7-a553-82353e71e193.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNDU4MjQxOC1lMDQxLTcwMzctMDlhMC01MWQ4NjA4ZjE3N2QvZmVkYjExYjUtMDU5OS00NmU3LWE1NTMtODIzNTNlNzFlMTkzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Dg9NG2rBWj4CxKLWbsDJ1Hfg68IsolDYqC2RD9WcW89OCYd9LIiBV0WmkCAwIf92wRah872cKZKhjvIFmOZ37kjKJHbplC~RunB-3Du0ZMAXi0SiLuSq6-9mgPi~2Pvok9Xq8Kfr5T5z8k7lny9IkK62FRQO9YjTP8fTVTh-lvdvGADKtq50dhJY1CtB49yctee4ejTbeMg3J0hoWQS0w2mHI1Zy17S60PWWwa-yTV6bKS29pskLtNdSxa4t012w~1f0yDY7C6DnnB1tQmLd9rMKxK5pj2bOAQiF2uRIeeCZMoXqzmB2khTwqGJxb0b2l4cFPaLtMsTscIBDouK1Pg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-14",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "04e844b8-c061-70f2-3354-2460e72031fa",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Paula, and I’m a caring, responsible, and cheerful person who truly enjoys spending time with children. I come from a close and loving family, which has taught me the importance of respect, kindness, and communication. I’m patient, creative, and calm, and I always try to create a positive and safe environment for kids.\n\nI enjoy activities like going for walks, doing crafts, playing games, listening to music, and helping with homework or daily routines. I love learning new things a",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-14T20:22:18.764Z",
            "score": 64,
            "opportunityId": "006R700000hYTZtIAO",
            "auPairName": "Camila",
            "id": "04e844b8-c061-70f2-3354-2460e72031fa",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Journaling",
                "Meditation",
                "Movies"
            ],
            "updatedAt": "2026-04-29T01:22:49.757Z",
            "lastAppLoginDate": "2026-04-29T01:22:49.753Z",
            "spotlightedReason": null,
            "approvedIQHours": 425.04,
            "profilePictureKey": "protected/04e844b8-c061-70f2-3354-2460e72031fa/b3996dfd-4143-41e2-b497-913d98411555.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2394356",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6291.36,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-05-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-08-28",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Cooking",
                "Graphic design",
                "Makeup"
            ],
            "sfId": "001R700000oRpUfIAK",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/04e844b8-c061-70f2-3354-2460e72031fa/b3996dfd-4143-41e2-b497-913d98411555.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNGU4NDRiOC1jMDYxLTcwZjItMzM1NC0yNDYwZTcyMDMxZmEvYjM5OTZkZmQtNDE0My00MWUyLWI0OTctOTEzZDk4NDExNTU1LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=B6yFxdOY5UEhJznWARcW7VfeyHWgwJC30fnzig7Y6pAeXOzC9gcOze3HMrNImyq2SLXHIsLIn2-rvtSIHUmQWOqdcZ6kbaaKB-QbJ1gxRQxzyL2b34eDMHIQZuFwVxE19KUAt74zshnF3p5Z9g~gS~ny6xIc0po6MXfJptHYRJA2cjKaw1RruxSZHlW5p5hqaB8n50apKe-cvW1VC-YANrRA1IDsScqDM73VL6NMfYBGhr1RAZUnlOA-4ePV1GWexbmhQlLAdgmhYiJtiCYoaHvw6vBiG3rWJWzgzX8~3e8lHeEgMYjW5ZdWEVcsPG6TFrcv30UnZruSh8ZKkRG90A__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Creative",
                "Funny",
                "Laid-back",
                "Perceptive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-03-12",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "14187448-2091-7008-be42-e01c2c7c9131",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! I love painting, (sometimes) reading, walking and driving for car and motorcycle! ☺️ I love my 15-year-old little dog, she name is actually Little. ❤️ I am actually a happy girl. I love tattooes and colorful hairs. I would like to be a big sister! I love my family and country but I would like to be learn more english, culture, America..and about me! I want to fit into a new environment!",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-12T14:01:16.608Z",
            "score": 64,
            "opportunityId": "006R700000ezmALIAY",
            "auPairName": "Dóri",
            "id": "14187448-2091-7008-be42-e01c2c7c9131",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-27T18:22:36.860Z",
            "lastAppLoginDate": "2026-04-25T13:22:46.563Z",
            "spotlightedReason": null,
            "approvedIQHours": 735,
            "profilePictureKey": "protected/14187448-2091-7008-be42-e01c2c7c9131/cb7230cb-c696-4d34-bec2-3ab5803728f9.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "HU",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "HUN2365984",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 735,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Hungarian"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2001-05-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000lZe2yIAC",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/14187448-2091-7008-be42-e01c2c7c9131/cb7230cb-c696-4d34-bec2-3ab5803728f9.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8xNDE4NzQ0OC0yMDkxLTcwMDgtYmU0Mi1lMDFjMmM3YzkxMzEvY2I3MjMwY2ItYzY5Ni00ZDM0LWJlYzItM2FiNTgwMzcyOGY5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=U8kULjYex0GNXabKoWwEDS-KtPJsfanCTDMntLjoPu8txmHBXa9jTsncALY31LbV4yw4unJma~BNRbBuXb62UNmth4DtlhZ0MBhlGQxi1loQUVragPPPGG2rUhxPJvv8pS6PiiaYSelF1UaO-b0HIyj-tyCSMjLxME9eTCHZkdVB~nytyhVvzE7iZElIwZcOgp04p4SCA-AQP56ZMqqPKmb7U4FhnXfsD3jyPr0rh-~BUMK7nvh1TWZX57ih23yg0vDnVY0uY9dCYQeskHYgViNHG0AhRI3G4ncBcf~kHsxl4a6YxxadmsgNiakv2X~l4RF3FkkOBxT9LJqtRV~5Vg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-09",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [],
            "loginId": "14684418-40e1-706e-6dfb-129deea8aad0",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, my name is Ana Carolina Zúñiga. I would like to tell you a little about myself. I consider myself a dreamer and a curious person. I really like airplanes because, for me, they represent freedom, adventure, and the chance to discover new places. I love the beach; it is my favorite place to relax and feel happy. I enjoy cooking and listening to music at the same time. I also like reading, and it is one of my favorite activities in my free time.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-09T16:29:33.730Z",
            "score": 64,
            "opportunityId": "006R700000eEyWkIAK",
            "auPairName": "Ana Carolina",
            "id": "14684418-40e1-706e-6dfb-129deea8aad0",
            "relaxingInterests": [
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T23:36:10.634Z",
            "lastAppLoginDate": "2026-04-28T23:36:10.630Z",
            "spotlightedReason": null,
            "approvedIQHours": 1248,
            "profilePictureKey": "protected/14684418-40e1-706e-6dfb-129deea8aad0/38fd4b3e-0b96-40dc-bee3-96cbf6912bf4.webp",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2360427",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1248,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-02-01",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking"
            ],
            "sfId": "001R700000kiDS5IAM",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/14684418-40e1-706e-6dfb-129deea8aad0/38fd4b3e-0b96-40dc-bee3-96cbf6912bf4.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8xNDY4NDQxOC00MGUxLTcwNmUtNmRmYi0xMjlkZWVhOGFhZDAvMzhmZDRiM2UtMGI5Ni00MGRjLWJlZTMtOTZjYmY2OTEyYmY0LndlYnAqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDQ3NjUzfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=A7iKoWv91fg371sF3Ko4l0WVoHjk2~LXsRHi6CkNiL4s2l~HvYyovYAdZXFC1QMxRAUcnw0rX1tnl6~29tgvPkpNJeXGBTwZXX5vPUNZivdUcgUvV6v3tckqBmvLqIZzIyAC0VcSHRikszwOLlgFkj3SUolZbGgRmqQzR0abV62EPeFatmOYHmMUxwuaz7QXLrdaL9zgh5xzaf9kG21ikurTsKX2IpeXsMUiZaE9UWc6u8TA3~~634fnOI3inAScXk3liRvtVOR~VJ6yaRhoHD3hzZIJDJKwyzXOeNlvLRxWsobcedVyQb3DojJjzVGIxwQ10RRd5B2v3Zo2K~sb4Q__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Cheerful",
                "Empathetic",
                "Funny"
            ],
            "matchingStartDate": "2026-03-13",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "1468f4b8-4031-70b6-ddcf-8b750cadf87a",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Emilly, I’m from Brazil 🇧🇷 and I’m really happy to connect with you!\nI’m a very energetic and positive person — I always try to make the best of every situation.\nI love staying active: I enjoy going to the gym, practicing sports, and doing yoga 🧘‍♀️.\nRight now, I’m studying English and I know I still have a long way to go, but I’m very dedicated and always give my best to reach my goals and fulfill my purpose.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-13T14:01:11.818Z",
            "score": 64,
            "opportunityId": "006R700000TfvrFIAR",
            "auPairName": "Emilly",
            "id": "1468f4b8-4031-70b6-ddcf-8b750cadf87a",
            "relaxingInterests": [
                "Meditation",
                "Movies"
            ],
            "updatedAt": "2026-04-28T23:18:06.483Z",
            "lastAppLoginDate": "2026-04-28T23:18:06.479Z",
            "spotlightedReason": null,
            "approvedIQHours": 1804.2,
            "profilePictureKey": "protected/1468f4b8-4031-70b6-ddcf-8b750cadf87a/72bc7634-85a7-4b66-9181-32077ab0c440.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2231806",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1804.2,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese",
                "American Sign Language"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-07-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Gymnastics",
                "Running"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Makeup"
            ],
            "sfId": "001R700000Y8U5OIAV",
            "totalNumberOfChats": 33,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/1468f4b8-4031-70b6-ddcf-8b750cadf87a/72bc7634-85a7-4b66-9181-32077ab0c440.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8xNDY4ZjRiOC00MDMxLTcwYjYtZGRjZi04Yjc1MGNhZGY4N2EvNzJiYzc2MzQtODVhNy00YjY2LTkxODEtMzIwNzdhYjBjNDQwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=KXlsP-M0W85QiRFmBKBOTDbmNlQhdommHdu8nVZNuBM2nFPpExilp7iGDg1IZ1yJj3q~0FUPMm-hBGXi-5hsvC1dSTfK0qJxi1wYe1w8yHs7wKQsBMhvNMNd7ILDvoq11wwbI3pHwCnLczoplSmhh-JqVxdjOGEu1op6UTZG4GAbdbldf56l4U8ILqLQi0laQBD2J3LqROnaC0tHtfG8-xL4HcLISj9tonU0QEp~YAxTbHu~eAVhQXxN5ut9qepX~2kKyJeRPR38ax5KDLe928OYYx1z4P2FYlSLW-hnXycVSiUIPWpY4TD7yULiN8Hdn3XDoq32tI893b~SWac8rw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-02-05",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "2428c438-8001-7060-d36a-f74a8798bb3c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I’m Martina Pino.\nI see myself as a creative and curious person who is always focused on my goals. I enjoy moving forward, building new things, and surprising myself with what I’m capable of achieving. I’m constantly seeking new ideas, new experiences, and new ways to grow.\nI also enjoy reading, listening to music, watching movies, and doing extraordinary activities that take me out of the ordinary.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-05T16:01:22.900Z",
            "score": 64,
            "opportunityId": "006R700000aI6F7IAK",
            "auPairName": "Martina",
            "id": "2428c438-8001-7060-d36a-f74a8798bb3c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Meditation",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T15:59:38.198Z",
            "lastAppLoginDate": "2026-04-19T14:23:18.979Z",
            "spotlightedReason": null,
            "approvedIQHours": 518.88,
            "profilePictureKey": "protected/2428c438-8001-7060-d36a-f74a8798bb3c/caa1aaaa-f5a4-47a1-9b6a-49a5eac226df.jpeg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CL",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "CHL2311297",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4343.22,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2002-08-30",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-08-07",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography",
                "Singing",
                "Social media",
                "Writing"
            ],
            "sfId": "001R700000gCbrdIAC",
            "totalNumberOfChats": 25,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/2428c438-8001-7060-d36a-f74a8798bb3c/caa1aaaa-f5a4-47a1-9b6a-49a5eac226df.jpeg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNDI4YzQzOC04MDAxLTcwNjAtZDM2YS1mNzRhODc5OGJiM2MvY2FhMWFhYWEtZjVhNC00N2ExLTliNmEtNDlhNWVhYzIyNmRmLmpwZWcqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDQ3NjUzfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=KO2oU4zBouvvD5jnl~5ELTtRh6fvEgJzzOUUqlcOtkgO744rhSV-LfVni944XbTdTBcMqQqe9rfI4EXJ-DGGoqbl2P9yUT4J5mqEboE9bBMXeVgi8xdNVpkCvf~yQ-hhyHMAm671BOicHFvDuVdjGmk6KbHoa4~AVEM-9SYKBrHDyAKhl3htGfCcEPVgT2JcR3ReeOvsGHJFR8zBpsPRsAg6P2~7HtO53J5JmHzS2L975TnvgE32111X83uOUusMDsAg2CfzsiMOrAN6ixlGnA159mmXkmyYah874RmHR8SLiDf~opcMH1wQQdU3bY7Z3-w7OZUmFIqPUJtGyZnZDQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2025-10-13",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "24a81468-20a1-70ef-dc8b-abfb072c811d",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, it's a pleasure to meet you. My name is Paula Valentina, I'm twenty-one years old, I live in Bogotá, I'm from Boyacá, in the municipality of Soatá. My dream is to learn a new language and discover new things, new places, and new opportunities in life. I'm proactive, cheerful, affectionate, calm in solvable situations, good with children, fun, and very helpful. I look forward to meeting you soon. A pleasure.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-13T21:21:26.477Z",
            "score": 64,
            "opportunityId": "006R700000Q3bosIAB",
            "auPairName": "Paula",
            "id": "24a81468-20a1-70ef-dc8b-abfb072c811d",
            "relaxingInterests": [
                "Camping",
                "Gardening",
                "Meditation",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-27T18:37:59.654Z",
            "lastAppLoginDate": "2026-04-27T18:35:39.205Z",
            "spotlightedReason": null,
            "approvedIQHours": 2230.65,
            "profilePictureKey": "protected/24a81468-20a1-70ef-dc8b-abfb072c811d/3783afab-ec11-4f34-b869-11fefc615592.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2011915",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 4533.45,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-06-06",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Swimming",
                "Table tennis"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing"
            ],
            "sfId": "001R700000T9xpnIAB",
            "totalNumberOfChats": 60,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/24a81468-20a1-70ef-dc8b-abfb072c811d/3783afab-ec11-4f34-b869-11fefc615592.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNGE4MTQ2OC0yMGExLTcwZWYtZGM4Yi1hYmZiMDcyYzgxMWQvMzc4M2FmYWItZWMxMS00ZjM0LWI4NjktMTFmZWZjNjE1NTkyLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=g8vSGExkNDaENUdu8Ycr2b4rGbfSqdoGPOo6RD46mk~-3x2WuExb212pLBNJB-c5PBKlpVrve9yUcPJ7t~gescqxMLYWnOgbhWXBrU9t95arXPyxrCBelkwGEfxClalCPkjsLSMJrtXP2LgEaEltVBZn6IE9Whv66Tu5fSyFGKV2URsOAg5H-ZKfLdg39gYMRm2Bq-5SkKPTHOvd~R7SIQHikUhFzrEmrPi9Dc1e-1UsmssjFqlj6gwt5l39d9TonEZCVTI6WEvv~Cz~IcfVrB1grZ6PGq2Hj7ubpdPA0D10b~zE3ZADMwv3sHas2JAHTWwVvXZ5T8325AQky0x6Ag__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Funny",
                "Independent",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive"
            ],
            "matchingStartDate": "2026-03-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "24b86488-d041-702f-a010-6acdbabbf7ef",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello! My name is Silvia and I am from Colombia. I am a warm, responsible and positive person who truly enjoys spending time with children. I love playing games, doing creative activities, going for walks and helping kids learn in a fun way. I am patient, caring and organized, and I always try to create a safe and happy environment. I would love to become part of a loving family, share my culture and create beautiful memories together.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-17T14:48:47.284Z",
            "score": 64,
            "opportunityId": "006R700000fP7OXIA0",
            "auPairName": "Silvi",
            "id": "24b86488-d041-702f-a010-6acdbabbf7ef",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Gardening",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:22:47.868Z",
            "lastAppLoginDate": "2026-04-29T01:22:47.863Z",
            "spotlightedReason": null,
            "approvedIQHours": 1250,
            "profilePictureKey": "protected/24b86488-d041-702f-a010-6acdbabbf7ef/d432c5ba-d2aa-42f8-899f-d8b652858e54.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL13287415",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1250,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2000-09-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Cycling",
                "Dancing",
                "Gymnastics",
                "Running"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000EMXAXIA5",
            "totalNumberOfChats": 23,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/24b86488-d041-702f-a010-6acdbabbf7ef/d432c5ba-d2aa-42f8-899f-d8b652858e54.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNGI4NjQ4OC1kMDQxLTcwMmYtYTAxMC02YWNkYmFiYmY3ZWYvZDQzMmM1YmEtZDJhYS00MmY4LTg5OWYtZDhiNjUyODU4ZTU0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=MHCY2~q954Wf-0~Dg~pondz5vnEBWQUYtph80ny3nqM-pf3d9Mb9AO7srqvCE5ZUWijM3pApcqNihd39~7jAKH1lefGdGaZtFAEahWOAsvW5ecv7ea3CLgSV1GvrSyjNrisf800VVV7qzLuC4V3TBYE4r62baPiWJOdrNB0P4FYsfTxKYYhOjbJygbIn3dudZ58a2eFgmMaxwcJCk3m-~czHoG2g6VdiDSUpI3GNdUdwndQV4YbrjSxFMdSwnm3E-MOPgb-vPQf7CGl7HtFK0H5d7RNHKJOk-uY5xN3YWal7uiYu77uEy6QFI4wBTpxKssKAoBGY41cE1nGHvmbHcw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Calm",
                "Cheerful",
                "Empathetic",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Warm"
            ],
            "matchingStartDate": "2026-03-13",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "24b8d478-b031-701c-b670-c50fd332fd16",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! I’m a cheerful and proactive person who enjoys bringing positive energy to the people around me. I graduated from university with a degree in Nursing and have a strong passion for caring for others, especially children, whose curiosity and joy inspire me. I love spending time in nature, exploring new places, and being around animals. I value kindness, empathy, and creating meaningful connections with people.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-13T20:01:00.429Z",
            "score": 64,
            "opportunityId": "006R700000fbnVBIAY",
            "auPairName": "Nadia Dolores",
            "id": "24b8d478-b031-701c-b670-c50fd332fd16",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gardening",
                "Movies",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:54:08.182Z",
            "lastAppLoginDate": "2026-04-29T00:54:08.177Z",
            "spotlightedReason": null,
            "approvedIQHours": 381.45,
            "profilePictureKey": "protected/24b8d478-b031-701c-b670-c50fd332fd16/ed49ce8d-166f-40e9-837b-894852b4479d.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "MEX2375635",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2048.55,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "1999-10-04",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000mGJO1IAO",
            "totalNumberOfChats": 15,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/24b8d478-b031-701c-b670-c50fd332fd16/ed49ce8d-166f-40e9-837b-894852b4479d.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNGI4ZDQ3OC1iMDMxLTcwMWMtYjY3MC1jNTBmZDMzMmZkMTYvZWQ0OWNlOGQtMTY2Zi00MGU5LTgzN2ItODk0ODUyYjQ0NzlkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gE06BN0b2dNp3y9inz17bc5XqHBbbgMcIew-VXx20E7vXVgFh8d9NkSwOLYWdCNxHJIsRSYLpeUMMkfG1vUB0Q2snn~pY-PD5Sfk~J9OogrNBDRW8A4E5l5W2Js6vLnA3DRgowqPrMkgemkyDR5971hVojUUxAA3CL-WP--CAFNViZTB9rveuLJee8NjJFmVbpoMevOZx-SN23KhFuVLZ7gHzSgOhn8g7xOttUmxFkrbOvm5x9qJYwI9ur3Ww42UBo9XLUTJG93E-xp3uMhXAVP2YWMNmI3gppP82H2S-Nd7RWZEwD8m-0-YaEG2mdEOt1jU58xQwNrPgtQ9lH5TYw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Independent",
                "Organized",
                "Perceptive",
                "Proactive"
            ],
            "matchingStartDate": "2025-12-18",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "24d83468-9031-70a4-cd78-6ccae114d48f",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello dear host family,\n\nMy name is Dayana, I am 24 years old and from Colombia. I studied Public Accounting and have worked in different jobs, which has helped me to be organized and responsible. But one of my favorite experiences was working in a daycare, because I really enjoyed taking care of the kids and spending time with them.\n\nI like cooking, reading, listening to music, doing exercise, and going for walks. I would love to share fun activities, games, and outdoor time with your children,",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-12-18T17:01:33.961Z",
            "score": 64,
            "opportunityId": "006R700000UwE9RIAV",
            "auPairName": "Dayana",
            "id": "24d83468-9031-70a4-cd78-6ccae114d48f",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T00:59:21.689Z",
            "lastAppLoginDate": "2026-04-29T00:59:21.685Z",
            "spotlightedReason": null,
            "approvedIQHours": 1411.4,
            "profilePictureKey": "protected/24d83468-9031-70a4-cd78-6ccae114d48f/b2decf55-9436-42ce-9f66-1e03c116b572.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2247972",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1411.4,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-01-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Photography"
            ],
            "sfId": "001R700000Zg2m3IAB",
            "totalNumberOfChats": 34,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/24d83468-9031-70a4-cd78-6ccae114d48f/b2decf55-9436-42ce-9f66-1e03c116b572.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNGQ4MzQ2OC05MDMxLTcwYTQtY2Q3OC02Y2NhZTExNGQ0OGYvYjJkZWNmNTUtOTQzNi00MmNlLTlmNjYtMWUwM2MxMTZiNTcyLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=eeh~yjdlbCTZxil3Nt5STkilZpXhR6pbpA5pO4zS2aS47xvJVvuWR-JIjOzM~531sLj2Rcu5Ko6VIziKy8yfe-chMF4SXRW8Cc0znHc8UzD7CtYycAKD6EdleTRSWuY0R74SWfQhzOaCuWuMTTe0fNE1WGZrDi9CGDr9xIqPpgU30lw9ZKcoYHLAnRezYi1PeClAmf8NjiilnAgpNAjYu-GoS-soGNk6FNIPwHwuIXh06KsPf9fQGHTe55KSU09LDydFaxlx5FaLk~Brt3kWYVjkL7RYjgegO65ScgHc~mUuLb1E9M6ZGueKuIWtYYLqnTefuYpnyrThpfsW8KhGag__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "24f85408-8021-703e-97e1-6da0afb929ba",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! :) I am a girl with dreams, caring , responsible, and positive person who truly enjoys spending time with family and children. Family is very important to me. I grew up in a loving environment where respect, kindness, and faith are essential. I believe in God, and my faith guides my life and helps me be patient, compassionate, and joyful in everything I do.\nI love do a lot of things like, playing volleyball, piano, guitar, singing etc I am respectful, organized, and always willing to help.:)",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T18:14:07.840Z",
            "score": 64,
            "opportunityId": "006R700000iVcJ1IAK",
            "auPairName": "Ana",
            "id": "24f85408-8021-703e-97e1-6da0afb929ba",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Movies"
            ],
            "updatedAt": "2026-04-29T00:45:27.735Z",
            "lastAppLoginDate": "2026-04-29T00:45:27.731Z",
            "spotlightedReason": null,
            "approvedIQHours": 230,
            "profilePictureKey": "protected/24f85408-8021-703e-97e1-6da0afb929ba/9ddbd41a-063d-4b49-8aa7-6b02c90ef60f.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2404468",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1311.4,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-12-11",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading",
                "Cycling",
                "Dancing",
                "Fishing",
                "Gymnastics",
                "Ice hockey",
                "Roller skating",
                "Running",
                "Sailing",
                "Skiing",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000pW4xhIAC",
            "totalNumberOfChats": 0,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/24f85408-8021-703e-97e1-6da0afb929ba/9ddbd41a-063d-4b49-8aa7-6b02c90ef60f.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNGY4NTQwOC04MDIxLTcwM2UtOTdlMS02ZGEwYWZiOTI5YmEvOWRkYmQ0MWEtMDYzZC00YjQ5LThhYTctNmIwMmM5MGVmNjBmLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=UiwBpqAh~SJSors9B4FvuS7bRFk-bSXdWZj59az3a1BSOl4XOucI0Yryp5DRMv4sxXpo30yN-PAT1wAW5MDofibe6M5hH~z2KcEC9vnEV8PJfT917xm0AEC-LlNj0R9eSXtEzTCp0QzR5U9eyxWA8pxcyRhTlUK7bpFUkrs6-u5OIsvf-l~SDdpIBXws4jatCHG4Q~dqEjnUS1-aeV-vEGOsNCItV1n8nBpS~0SEUOr6eR-ps7~mjtEG5z9-aTbkA8rb0o2aJ4J8DRwmuLWZDN94wD--jfooQGHs0KGCfbL6naqanBf~Nu19~1MviT2qbe2uYRpxi4YouThcZd2zqg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic"
            ],
            "matchingStartDate": "2026-02-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "34a8e4b8-6091-70d5-1822-1dcdb23e61e9",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m a positive, responsible, and open-minded person who loves spending time with kids and being part of family life. I enjoy simple activities like playing games, doing creative projects, reading stories, going for walks, and helping with homework. I’m happy to share everyday moments like cooking together, movie nights, or outdoor activities. I’m also curious about new cultures and excited to become part of your family, support your children, and create a warm, fun, and safe environment for them",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-17T15:01:15.393Z",
            "score": 64,
            "opportunityId": "006R700000de3gfIAA",
            "auPairName": "Vittoria",
            "id": "34a8e4b8-6091-70d5-1822-1dcdb23e61e9",
            "relaxingInterests": [
                "Journaling",
                "Movies"
            ],
            "updatedAt": "2026-04-28T17:27:16.470Z",
            "lastAppLoginDate": "2026-04-20T12:53:49.651Z",
            "spotlightedReason": null,
            "approvedIQHours": 880,
            "profilePictureKey": "protected/34a8e4b8-6091-70d5-1822-1dcdb23e61e9/0d79e1b2-6718-432c-b79b-542d8beaa148.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2355254",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3360,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Advanced - Level 6",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Italian",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2003-10-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art"
            ],
            "sfId": "001R700000k0xNOIAY",
            "totalNumberOfChats": 16,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34a8e4b8-6091-70d5-1822-1dcdb23e61e9/0d79e1b2-6718-432c-b79b-542d8beaa148.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGE4ZTRiOC02MDkxLTcwZDUtMTgyMi0xZGNkYjIzZTYxZTkvMGQ3OWUxYjItNjcxOC00MzJjLWI3OWItNTQyZDhiZWFhMTQ4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=IGoEdR6jmdCCDJNuaqYWajY6pisOyHRpNu53oSOBzDOgfn5beic1Ll0oqJSO98nMCnNCi8ssAAi13uY6IUvdcFaeaQVDt8ECGevMrsLpzTAZss~eNIhWFr8OoIHseaOvriplQEUyaLZXOypoF6XCBd4Kl-QewhOJRQuHP4xSFmz3i6kIyfqKkZPObdhWu9kjg16mcX7fsuJgYVbLmSWHP6XAipKTbD90XJ8EATLAfM-sszTAND3h4RiJpd2mwwTB4SzNP5q8Nnj2kLaAMCGlavYMlF9ySacNpM-pRHhPVioWAIJaGkHlXHZ9Qp2pZkr1B-l3wZiflhLr0kWKjwl56A__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Funny",
                "Intellectual",
                "Organized",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-03-13",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "34a8f418-1051-7078-833c-0ee246a42875",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! I’m a very active and creative person, and as a teacher, I love finding fun ways to help children learn through games and activities. I enjoy dancing salsa, cumbia, and merengue, reading, and making makeup and hairstyle videos. I also love painting landscapes, flowers, and my favorite cartoons. Staying fit is important to me, so I go to the gym and eat healthy. In my free time, I enjoy playing board games like Uno, parchis , and dominoes, also in my weekends I really like walking or running.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-13T22:01:26.149Z",
            "score": 64,
            "opportunityId": "006R700000fNovlIAC",
            "auPairName": "Estefania Del Carmen",
            "id": "34a8f418-1051-7078-833c-0ee246a42875",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Journaling",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T23:53:47.596Z",
            "lastAppLoginDate": "2026-04-28T23:53:47.592Z",
            "spotlightedReason": null,
            "approvedIQHours": 2633.22,
            "profilePictureKey": "protected/34a8f418-1051-7078-833c-0ee246a42875/3a234da6-7666-4094-bbd4-20faddaa56ad.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2014741",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4750.32,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-09-08",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Table tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Drawing",
                "Makeup",
                "Photography",
                "Social media",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000lzoWMIAY",
            "totalNumberOfChats": 17,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34a8f418-1051-7078-833c-0ee246a42875/3a234da6-7666-4094-bbd4-20faddaa56ad.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGE4ZjQxOC0xMDUxLTcwNzgtODMzYy0wZWUyNDZhNDI4NzUvM2EyMzRkYTYtNzY2Ni00MDk0LWJiZDQtMjBmYWRkYWE1NmFkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=YFmvFCg4S83oqC0Msis4ljIMSAK0Wxen4X~RG5MuWVdesRpY2CuFlrnwLUCmkcx2xKPbmWkwp4DYBr2G3qdNTSILr3Z4DjKiVVqh7uVO9b~4tvgzNfM3~9t1vFnlLMvIQPPOLyKHELnFCyQqwsqjFX~eZOKm9nAdQfJUg18dgjkVaROzceB5ueyCA4ubr5QLqHcFJ75cv8f-blTY2zNcnZUssFDaUJUQVqmPlplMpC0LSSSmyZp88aU8KU5JdS03nxocPWkdW0kjE4OkTQ7tdVYZ55v2gQDUT8Xc-gxYlcRwpJf62uUxkAYf4IZ4-kl6rJN5KmT6LDN2rtcfX0W9nQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm"
            ],
            "matchingStartDate": "2026-03-25",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "34d82498-2081-7072-491f-0c9c3d0a14f9",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Camila, I’m 24 years old, and I’m from Brazil. I consider myself a kind, patient, and responsible person who loves learning about new cultures and meeting people from around the world.\nI decided to become an au pair because I want to improve my English, experience daily life in another country, and grow personally while being part of a welcoming family.\nI really enjoy spending time with children, helping them learn new things, and creating fun and caring moments together.\nIn my free time, I love cooking, reading, listening to music, and going to the shopping mall with friends. These activities make me feel relaxed and happy.\nI hope to find a loving family where we can share good experiences, learn from each other, and build great memories together.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-25T16:25:59.972Z",
            "score": 64,
            "opportunityId": "006R700000WmVAOIA3",
            "auPairName": "Camila",
            "id": "34d82498-2081-7072-491f-0c9c3d0a14f9",
            "relaxingInterests": [
                "Camping",
                "Gaming",
                "Movies",
                "Television"
            ],
            "updatedAt": "2026-04-28T04:46:30.455Z",
            "lastAppLoginDate": "2026-04-19T13:06:12.132Z",
            "spotlightedReason": null,
            "approvedIQHours": 1532.5,
            "profilePictureKey": "protected/34d82498-2081-7072-491f-0c9c3d0a14f9/bf83af36-6276-45ef-b83c-46c9c59889ea.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2269613",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 14336.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-04-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-10-02",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Ice hockey",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Social media"
            ],
            "sfId": "001R700000bu9jIIAQ",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34d82498-2081-7072-491f-0c9c3d0a14f9/bf83af36-6276-45ef-b83c-46c9c59889ea.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGQ4MjQ5OC0yMDgxLTcwNzItNDkxZi0wYzljM2QwYTE0ZjkvYmY4M2FmMzYtNjI3Ni00NWVmLWI4M2MtNDZjOWM1OTg4OWVhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=JlF-OqM9mogmQsLHURVlga0rqD0QG02l0qx9LDHY40YOx-Pp0cBIAW3eFaU33~VF1sL7oGekLk0QDU~8AEcyOhAyXYPi62sBrYDzKfKG7TnI4Jw5h3hrZXZneg4MRYYu~af0yXUPLiDlnBAgQ-3y8s0JtlSp0ExwCvQmqlVaosskw4JLt7T5eWeSTlaIhQer9VBQ2UJQ3tkmdJG0DPAt~RPFwRCWyCg5YnZCDbF0eobaLBQ9zVpunGyyXzopFwpviMJbHVrQX84KF~M0xig3SQUSfUkyhKTD28T55TEBQEYGmaSnS25GfgFbnTaYkgGy2ROa7-Pl~XbMNSCJkMVB-w__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Warm"
            ],
            "matchingStartDate": "2026-03-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "44784418-9021-7018-1631-b30285c472b8",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m a language degree student with a dream of becoming a teacher of English, Spanish, and French. My greatest strength is my passion for teaching; I truly enjoy supporting children as they grow. I consider myself a creative and very empathetic person, so I adapt easily to new environments and love creating a cheerful and positive environment for children. I am ready to be part of your family and provide your children with an enriching, fun and educacional experience.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-28T18:52:14.941Z",
            "score": 64,
            "opportunityId": "006R700000gbxwzIAA",
            "auPairName": "Dani",
            "id": "44784418-9021-7018-1631-b30285c472b8",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T16:44:55.993Z",
            "lastAppLoginDate": "2026-04-23T02:42:10.232Z",
            "spotlightedReason": null,
            "approvedIQHours": 460,
            "profilePictureKey": "protected/44784418-9021-7018-1631-b30285c472b8/5fc87d95-dd30-45f6-8fc3-eb2aa63cd65e.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2384092",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3224,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2004-03-31",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Hiking",
                "Swimming",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Drawing",
                "Photography"
            ],
            "sfId": "001R700000nOWKHIA4",
            "totalNumberOfChats": 19,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": true,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44784418-9021-7018-1631-b30285c472b8/5fc87d95-dd30-45f6-8fc3-eb2aa63cd65e.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NDc4NDQxOC05MDIxLTcwMTgtMTYzMS1iMzAyODVjNDcyYjgvNWZjODdkOTUtZGQzMC00NWY2LThmYzMtZWIyYWE2M2NkNjVlLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=F6g8xPBntwxONaBlKVW4jB0EqLSs3XBN7pAn-ZQWN8oQrn3OZmPXZ9-qyXnaa45-OPahLDZ9B51TPxaDFdPv6FIMYGGgcxR4ugjF1SqYpON0710Pq1bKkbY8Ar4wjiJsHApjZZcoDyX4GKdPhNi4x8iuplgg-8FBGY64qXFK86QvIPTIyw~001ldjJ3Iq2a4R2tYLg2uNZEu9F7Uu91NVywo8WPUE0jfoN7gp27MyaHfRfEzppog5-VxfTBaJAn88MZjizwjUp4pd1ld3Epsa6ons5NHz8Dt7EzWlxjD4FZCGYCfiumeuhI3pyFOps2X23mZ9WIaOujsrhr6IszQNQ__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2025-11-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "44a864a8-a011-7069-6fc3-675e307557ea",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Giovana de Oliveira Trajano, I am 23 years old and a lawyer. I graduated from law school in 2024 and currently work in consumer law. I live with my parents and our two dogs, and I have a brother and a sister who live independently. Growing up in a close family taught me responsibility and care for others. I am responsible, adaptable, detail-oriented, caring, and patient, and I enjoy creating a warm and positive environment for children and families.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-28T23:00:10.126Z",
            "score": 64,
            "opportunityId": "006R700000OoOCbIAN",
            "auPairName": "Giovana",
            "id": "44a864a8-a011-7069-6fc3-675e307557ea",
            "relaxingInterests": [
                "Journaling",
                "Meditation",
                "Movies",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:21:50.345Z",
            "lastAppLoginDate": "2026-04-29T01:21:50.340Z",
            "spotlightedReason": null,
            "approvedIQHours": 200.52,
            "profilePictureKey": "protected/44a864a8-a011-7069-6fc3-675e307557ea/8fc9bb1c-a615-4ad4-bfd1-935c242a275b.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2166359",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5500.52,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2002-07-26",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2027-01-01",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Running",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking"
            ],
            "sfId": "001R700000Rbn73IAB",
            "totalNumberOfChats": 90,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44a864a8-a011-7069-6fc3-675e307557ea/8fc9bb1c-a615-4ad4-bfd1-935c242a275b.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NGE4NjRhOC1hMDExLTcwNjktNmZjMy02NzVlMzA3NTU3ZWEvOGZjOWJiMWMtYTYxNS00YWQ0LWJmZDEtOTM1YzI0MmEyNzViLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=P3tZ7L7f6zuaA~MXT5yGNzHwJSYeRpIuCrrcdcF74z80pm6AZyWAu0FrObmAQBLnYp9Mturm8-ZwBU9MRFcgMmb3Pvh9h4eGKGgDZ2LmSB8HThB94rGchtlJ5OkB9KMx9pF74-4-i8mmZkSInla~zhj8EsnwBxlxFeTsiaJo1Zb2HlRFPdUDDs8NMN~~Qy8vLRcyo3n3CUkSRMgN9PDYsNuTyYhssjKv4dXHrmbDy46dWNQYmv0foKDWE9CY5U-vOQqSurzhVUJjK1azTU8Egef7P5RWaVgcRdXHzuQDLkE5qzByMyljx2yllxXGd9DukzaaPnhA-FDw4Ogvyq~PxQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "44a8e458-f081-7023-0b57-0e7aee485e16",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Studying psychology, my focus is working with kids, I already have experience with them, but what I really want is to impact others out of my country, teach them about my culture and be part of a new one, always open to learn about everything. I'm an active person, like to explore and love to read. Really like to be part of nature and be able to know wild life. Enjoy family time but also time with myself.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T19:04:12.791Z",
            "score": 64,
            "opportunityId": "006R700000hwKlZIAU",
            "auPairName": "Angelica Josselyn",
            "id": "44a8e458-f081-7023-0b57-0e7aee485e16",
            "relaxingInterests": [
                "Camping",
                "Card games",
                "Gaming",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:19:19.637Z",
            "lastAppLoginDate": "2026-04-29T01:19:19.632Z",
            "spotlightedReason": null,
            "approvedIQHours": 345,
            "profilePictureKey": "protected/44a8e458-f081-7023-0b57-0e7aee485e16/c161765c-eeec-4131-91ce-9a9d8bbe7d22.jpeg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2390791",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 9014.45,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Advanced - Level 6",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-11-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Other"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2027-03-19",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Photography",
                "Writing"
            ],
            "sfId": "001R700000ottjpIAA",
            "totalNumberOfChats": 1,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44a8e458-f081-7023-0b57-0e7aee485e16/c161765c-eeec-4131-91ce-9a9d8bbe7d22.jpeg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NGE4ZTQ1OC1mMDgxLTcwMjMtMGI1Ny0wZTdhZWU0ODVlMTYvYzE2MTc2NWMtZWVlYy00MTMxLTkxY2UtOWE5ZDhiYmU3ZDIyLmpwZWcqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDQ3NjUzfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=AFH8vh5AlJ8p3vz3QMQXQXA4Xhlq8JPdPAO-xBsxlfW-~QSn-dU8LzUhdEzRyTZEiYxO42YqSoA6EcyBdREeJh-8gw8FHmGhcdLUx6DpVc6OzPne1ZGCkCac1Dan6YIDItKtA~IQp0RuYPZmVUM1Dq5Fw6zClJTvQUS~g3zwouR7Oof~yvWr5Nrzl-RaaAk58vZDu5E43DTP8kb9S7ZSfsQQHTrzLbXfc2~0~9DjQszSlx2bAd5d2iBkL5wM5eUExicjoEigo~GtZKDh2-z~MrtSgcioFTORylzuh2MTEGizDNAC-Vqde4NOKpDoDcdg9hov~FJ5J4tUKuoqBjLmnA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-09",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "44f8d428-1011-70b8-4416-4c01e7c51e8e",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Evelin, I'm from Colombia and I live in the city of Medellín. I am an interior designer, so I am a very creative person. I love painting and baking, especially on weekends. During the week, I work and also enjoy going to the gym to stay active. I consider myself a punctual, responsible, and patient person. I like being in positive environments and surrounding myself with good energy. I truly enjoy spending time with children; with them, I smile, learn, and discover new worlds.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-09T19:53:41.414Z",
            "score": 64,
            "opportunityId": "006R700000hJC1VIAW",
            "auPairName": "Eve",
            "id": "44f8d428-1011-70b8-4416-4c01e7c51e8e",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T19:58:51.420Z",
            "lastAppLoginDate": "2026-04-28T19:58:51.417Z",
            "spotlightedReason": null,
            "approvedIQHours": 3402.48,
            "profilePictureKey": "protected/44f8d428-1011-70b8-4416-4c01e7c51e8e/76cd1947-8ee5-4811-be2c-2205c02dd60e.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2388127",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 11291.52,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-09-23",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Roller skating",
                "Running",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Graphic design",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000oAza8IAC",
            "totalNumberOfChats": 14,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44f8d428-1011-70b8-4416-4c01e7c51e8e/76cd1947-8ee5-4811-be2c-2205c02dd60e.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NGY4ZDQyOC0xMDExLTcwYjgtNDQxNi00YzAxZTdjNTFlOGUvNzZjZDE5NDctOGVlNS00ODExLWJlMmMtMjIwNWMwMmRkNjBlLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=U7wbl6Gefbtrq~R7Y6nYvDOjib3Jg~jWfIjs74XkebuaxM8r1bVd8yXN7z1CH-Ip6224fv0f1BOHFj3ciSowO52skU8OcQsl3qqzkq7lrUufZFlG6HYQH~vK4FBNbGTA-SyVv4HCAWhydKlOD6tm-FggZPomvqMt~7AFRDru58mdmjI7oVxbkWqH4IbbgFHIArn167GTcgwlraBrmrPGDyUAakA~cTVPD8X1fJ4vISUdo17frBqeU8EvdEi7x0ex-~mMQQS7f9Mz1V7k9f4nWx9QXY5mbH9xCAk-gjRBklAW6h3ldsvjgztUtu2BBOIjIYgf0-rh-ku-q0f5iyJTEA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Empathetic",
                "Funny",
                "Independent",
                "Organized",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "5438d418-c041-704f-6829-78bf4fce12bf",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Monserrat, I’m a 24 year old, Industrial Engineering graduate from Mexico. I’m a creative and caring person who loves reading, drawing, and painting in my free time. I also enjoy listening to music, watching movies or series, going for walks, and playing games. I’m patient, responsible, and truly enjoy spending time with children whether it’s helping with homework, doing creative activities, or just having fun together.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-30T13:27:13.402Z",
            "score": 64,
            "opportunityId": "006R700000bQBlhIAG",
            "auPairName": "Mon",
            "id": "5438d418-c041-704f-6829-78bf4fce12bf",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Journaling",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T23:23:00.641Z",
            "lastAppLoginDate": "2026-04-28T22:41:08.051Z",
            "spotlightedReason": null,
            "approvedIQHours": 3702.78,
            "profilePictureKey": "protected/5438d418-c041-704f-6829-78bf4fce12bf/e9278477-c7ee-4d5c-93f6-e29104239e12.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2319259",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 8519.22,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-11-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Baseball",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Crafts",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000hUciDIAS",
            "totalNumberOfChats": 6,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/5438d418-c041-704f-6829-78bf4fce12bf/e9278477-c7ee-4d5c-93f6-e29104239e12.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDM4ZDQxOC1jMDQxLTcwNGYtNjgyOS03OGJmNGZjZTEyYmYvZTkyNzg0NzctYzdlZS00ZDVjLTkzZjYtZTI5MTA0MjM5ZTEyLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gnI7BDnnMvDyBTSAkyNX8p0BYz3E3wL2cSgHiLfleIENFjhmjmyyreQOR3xf1ewMXr2AcIdmr0k8p-C~vE6V0hcNI2dDQE1v6QAFQ~1Ja3xki~VoUaOq0V67BwgowrD1i4SV26uygqq8G-s15LwclZj-EiEWhbDl-KGpPZLr0Ih6PVtES-C0j97zgD9CpIeSWkZbyIjrZoJI4~-8mKYmmqNhBSIBmyvvcVIJW0D0MahcAoHotmrYij-qPF7x6mB8Uq7QjIXMlkEgq9hBy-midywNixQyvmqjvf4vavvLr1vm~jc2mLpMJdAbfZ-zOzu5KvopAV6qwwlbUWsgHI6lDA__"
        },
        {
            "personalityTraits": [
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Funny",
                "Organized",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-01-09",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "54583488-90a1-7032-2d4b-c9e4b37e4954",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I'm an empathetic, patient and creative girl. I love learning new things and talk about different topics. I'm really interested in holistic therapies and the universe with all it's mystery. I'm a Reiki healer with three courses and I love it. Spending time with my family is very important to me, we definitly appreciate a good laugh! I'm an introvert, so being alone sometimes is really good for me too, it's a time to recharge, organize my thoughts and watch my beloved brazilian soap operas!",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-09T21:01:04.874Z",
            "score": 64,
            "opportunityId": "006R700000bOdJ5IAK",
            "auPairName": "Mariana",
            "id": "54583488-90a1-7032-2d4b-c9e4b37e4954",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:43:35.849Z",
            "lastAppLoginDate": "2026-04-29T00:43:35.837Z",
            "spotlightedReason": null,
            "approvedIQHours": 1571.6,
            "profilePictureKey": "protected/54583488-90a1-7032-2d4b-c9e4b37e4954/452edaa5-05b9-4342-9fd4-eed149d193b8.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2326147",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1571.6,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2000-02-29",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2027-01-22",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup",
                "Writing"
            ],
            "sfId": "001R700000hSviYIAS",
            "totalNumberOfChats": 125,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": true,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/54583488-90a1-7032-2d4b-c9e4b37e4954/452edaa5-05b9-4342-9fd4-eed149d193b8.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDU4MzQ4OC05MGExLTcwMzItMmQ0Yi1jOWU0YjM3ZTQ5NTQvNDUyZWRhYTUtMDViOS00MzQyLTlmZDQtZWVkMTQ5ZDE5M2I4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Tij6yCPGkJRrHLIgbeWxLiOOeAgUxSddm-77isYrIEnyGeNKSiH7BPLetSP1RikoHOn4i5U7rVzcgniroyELPemuxZKCaoy05~JXdAT5a~SbY7zGMazgR52gr0otInrSLhqPjx5n5FKBSEfeyD8jAtHDCYIKAs2yLadv7FFmmZteH5zZuqYKAKdnox1GVcyGf45yd7S4jPix8tgHR3ZneK3LxQ6JQ0h51Uqhf9mkLRxBkAyPO12k066YC~7knqoQn4SmhVmnCr~CJLcTAbEaQMNOVb~heDXTsJzX73B7lFzTqEPwq3afAoxfbAYszEh0IjnduPi6Px3yXTiWW1GVHg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Independent",
                "Organized",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-01-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "54789468-b001-70ae-2178-d5eb5a411759",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a curious, creative, calm and Easy to deal with. I love discovering new things, experimenting with different ideas. I am the balance between being extroverted and being introverted, I adapt to the environment. I'm a good listener and I love an adventure. I lover art to, since I graduated in Gráfic Design, I stiil don’t work with this, but I make some art for some people, includ my sister’s brand Mare d’ Aromi.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-17T16:00:52.511Z",
            "score": 64,
            "opportunityId": "006R700000PGWyPIAX",
            "auPairName": "Lu",
            "id": "54789468-b001-70ae-2178-d5eb5a411759",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T22:52:28.782Z",
            "lastAppLoginDate": "2026-03-16T13:42:22.655Z",
            "spotlightedReason": null,
            "approvedIQHours": 1110,
            "profilePictureKey": "protected/54789468-b001-70ae-2178-d5eb5a411759/3ce98c95-cc64-409b-bf3d-2176c70b9449.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2173028",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 8581.17,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2000-09-12",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Hiking",
                "Roller skating"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000S93UnIAJ",
            "totalNumberOfChats": 39,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/54789468-b001-70ae-2178-d5eb5a411759/3ce98c95-cc64-409b-bf3d-2176c70b9449.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDc4OTQ2OC1iMDAxLTcwYWUtMjE3OC1kNWViNWE0MTE3NTkvM2NlOThjOTUtY2M2NC00MDliLWJmM2QtMjE3NmM3MGI5NDQ5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=A1clH-6t4pMfLd0zzVacksGmZWjV-xRUWxrR66BZGGMFno3XT1vh6LZxSq5p4q5XxMOaMaOTUWjw1H3THOQeV4lrfHhEX6CqHuPPj8VShsdiV2rrkBUadeZbzGmQBgbRCB9GucDLw6jpfmZTwVAMwqH3UjIgrDce49r1gy35w~0ugkYRtAyGOz6zIlqrdSl4eYe1vDVdAFzB8cmFIvOfX5gPq7AZ-Jdck-cnl3GWaLRcsATBttsYm3nqqelhKrAOHQ4XKMxJuo6aOFCTqdZQiTBh8C0epd3NMbsCKPLRpWHzyDYUiy89EJ-AjHjbA6uXpvLNfSZdAswgaH~kYRGMiw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Driven",
                "Empathetic",
                "Independent",
                "Laid-back",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-02-03",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "549854e8-90f1-70db-8603-00dd8449ad4b",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello host family! I’m Maria Clara, 22, from Brazil. I’ve dreamed of living abroad since I was a teenager, and now is the perfect time to make it real. I love reading, discovering new places, and sharing those moments with kids. I’m calm, responsible, loving, and creative. I’d be happy to support your children with care and fun, share my culture, and grow with your family through this amazing experience.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-03T14:01:26.596Z",
            "score": 64,
            "opportunityId": "006R700000Rw8FPIAZ",
            "auPairName": "Clara",
            "id": "549854e8-90f1-70db-8603-00dd8449ad4b",
            "relaxingInterests": [
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:26:40.121Z",
            "lastAppLoginDate": "2026-04-29T01:14:35.510Z",
            "spotlightedReason": null,
            "approvedIQHours": 3683.96,
            "profilePictureKey": "protected/549854e8-90f1-70db-8603-00dd8449ad4b/28a7d4f4-2f6b-42c6-994d-39dfeec6e5d9.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2208050",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 9576,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-08-22",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Handball",
                "Ice hockey",
                "Skiing",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Musical instruments"
            ],
            "sfId": "001R700000VV1HLIA1",
            "totalNumberOfChats": 17,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/549854e8-90f1-70db-8603-00dd8449ad4b/28a7d4f4-2f6b-42c6-994d-39dfeec6e5d9.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDk4NTRlOC05MGYxLTcwZGItODYwMy0wMGRkODQ0OWFkNGIvMjhhN2Q0ZjQtMmY2Yi00MmM2LTk5NGQtMzlkZmVlYzZlNWQ5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=iWUAmTH1l5O7-UfD~RNrZR0r97yJUmp9aVg~ULRx9hcraUJVTQ11JzQej6wwGtckXVrym8y-tApQXLXwV74Uji~OUdjK5Iw6e9sndGiIgbrmyo4CmOJqQaEZOOMJ7twI2l3Ipl7383pFyalW9sK7gRrNcSQFouEQ9ZrdHQET5kM~7gpONTNDh5LyNM5Ko5LXNlL4ucvebBgEqhmEXZrwBfuEybzRrFF5CZpBTWumwQahkiy-0SjKrTucYt6Acy1YD3nc--k3vYK0aYK76ULVybcjM7VqrbYyFOBF540uKfTg6I1kmJ4hn3vldZzAakANlM2XXzqVK~3voUFPbw97-Q__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Creative",
                "Empathetic",
                "Energetic",
                "Funny",
                "Passionate",
                "Proactive"
            ],
            "matchingStartDate": "2026-04-02",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "6438d4c8-0081-704b-3653-49d63ad25839",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m Pau 😊. I’m currently graduating from two degrees at the same time 😅🫠 while enjoying every stage of my life to the fullest. I love watching series 😎, reading books 📚, and spending time swimming and dancing 💃. I’m a cheerful, fun, and energetic person, very family-oriented—I grew up surrounded by many cousins—and I truly enjoy making new friends, sharing experiences, and connecting with different people and cultures.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-02T19:43:25.979Z",
            "score": 64,
            "opportunityId": "006R700000Q8UJhIAN",
            "auPairName": "Pau",
            "id": "6438d4c8-0081-704b-3653-49d63ad25839",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Movies",
                "Reading",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:10:18.465Z",
            "lastAppLoginDate": "2026-04-29T01:10:18.459Z",
            "spotlightedReason": null,
            "approvedIQHours": 1640.52,
            "profilePictureKey": "protected/6438d4c8-0081-704b-3653-49d63ad25839/3298f64d-f4c6-4d70-8635-792406d6f409.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2184755",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4639.68,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-12-16",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Swimming",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000TGSZ8IAP",
            "totalNumberOfChats": 7,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/6438d4c8-0081-704b-3653-49d63ad25839/3298f64d-f4c6-4d70-8635-792406d6f409.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDM4ZDRjOC0wMDgxLTcwNGItMzY1My00OWQ2M2FkMjU4MzkvMzI5OGY2NGQtZjRjNi00ZDcwLTg2MzUtNzkyNDA2ZDZmNDA5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=KWB5iecG5XyKbN6tfIRCl3D4fwiM~G03XU8xuHRCw9oo-k7FZQMHvxYAR~W89O45vUMbDZlgvQDaesfAxYwe8FdsvR-9ucbnUBto63EtYkZ9B0qgAHaQNNy01ZSvMWbjH1lg~qWerSnEtmEnJe9ebCh7cZXVUDNnUJRCuIPQ5J~2pgUxd3lR1S7MVwbjOGQtmwCJPtQvH3DlhMdtdltp5mngS0l~j~xXz7FtLztVZBkYg7QMUAJ00K5yPwbkqGT30urqLTMfew6th9Ej-VWhCNK-YaMBK2kUSAFgyts1ICsCZ~4HwMI0oDhR93zJHvFdaExkHhmkmrqVTD5~NTZhxA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-01",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "644884a8-5091-7022-c6fa-c7596d346f26",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Laura García, and I am from Colombia. I consider myself a responsible, kind, and polite person. I am very disciplined and always eager to learn and grow. I enjoy working with children, creating a safe, positive, and fun environment for them, and supporting their development with patience and care. I am also organized and value routines, which I understand are important for children’s well-being.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-01T02:52:26.099Z",
            "score": 64,
            "opportunityId": "006R700000gbVcYIAU",
            "auPairName": "Laura",
            "id": "644884a8-5091-7022-c6fa-c7596d346f26",
            "relaxingInterests": [],
            "updatedAt": "2026-04-29T01:17:45.340Z",
            "lastAppLoginDate": "2026-04-29T01:16:49.619Z",
            "spotlightedReason": null,
            "approvedIQHours": 339.92,
            "profilePictureKey": "protected/644884a8-5091-7022-c6fa-c7596d346f26/b3fe708e-c4b5-40dc-ac26-6a237ad753a1.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2385207",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1664.12,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2000-04-04",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [],
            "sfId": "001R700000nO0InIAK",
            "totalNumberOfChats": 36,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/644884a8-5091-7022-c6fa-c7596d346f26/b3fe708e-c4b5-40dc-ac26-6a237ad753a1.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDQ4ODRhOC01MDkxLTcwMjItYzZmYS1jNzU5NmQzNDZmMjYvYjNmZTcwOGUtYzRiNS00MGRjLWFjMjYtNmEyMzdhZDc1M2ExLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gUKBC66-iw2y0Tvln7AlkS3BF4R~v3NVNwJQmFMcrUGzP-BsRqPyZN3qB3zW~VFID-p3z2fEBWx7HRfiIZrZ44UcOownkIojtrY38DTPHgPNnDul2bXtACLMW022t1npiJ0hgfctaaMsHEN0kQ2uTQWIP1CgkwFtcAvLdgjPzsE9Tb0mlnlb~PqHQG9~-1ZnSZC1Akbap7nPiOvPPbJw9BI6cTarGyWqVrDyN2hvTs1rGRrfAV3h~gpH92gJ6FPXAjIxyfkYtlYMjiBCOYxWWQli3m4aJ5icYjBaCjy4-sIVW9xnoFkcvt6KNdRxMhLVdM682gM2ozFVE-p9fDvRqA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2026-03-19",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "64685438-d011-7045-5929-b3463592db05",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, mi name is Laryze. I’m 22 years old. I love to dance, and i’ve been practicing capoeira for a few years. I’ve been working on a social capoeira project for children, teenagers and adults for some time now.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-19T16:17:21.934Z",
            "score": 64,
            "opportunityId": "006R700000fTaOfIAK",
            "auPairName": "Lary",
            "id": "64685438-d011-7045-5929-b3463592db05",
            "relaxingInterests": [
                "Movies",
                "Reading"
            ],
            "updatedAt": "2026-04-28T09:59:48.425Z",
            "lastAppLoginDate": "2026-04-25T14:03:33.600Z",
            "spotlightedReason": null,
            "approvedIQHours": 1632.9,
            "profilePictureKey": "protected/64685438-d011-7045-5929-b3463592db05/ba00304e-dce1-4482-afd4-9ec833fd073a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2374664",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2078.7,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2003-07-05",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-11-06",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Martial arts"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000m6kqxIAA",
            "totalNumberOfChats": 20,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64685438-d011-7045-5929-b3463592db05/ba00304e-dce1-4482-afd4-9ec833fd073a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDY4NTQzOC1kMDExLTcwNDUtNTkyOS1iMzQ2MzU5MmRiMDUvYmEwMDMwNGUtZGNlMS00NDgyLWFmZDQtOWVjODMzZmQwNzNhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=hDs6NBz3QVNet7641VryFl7I6j3ygVeq72JcB~bDZlNdUneVCRoK7RakXeh76cv7bfxUDJQYmv~cg6hwak19YFq~Fa76G14kOnNpmFNauwpan3oITIN-TNcUdCapsRMDlaEY7eBRswGuA0QhyrBz~JfeWoTTsFFHhq9L7b6lW~N3cP5ckiNU5Ds~tgBgU9rv48K5scSD-YXIrtEw2bCUERCesz68RWhLbTVeNEPMmNGNN-b6VrFiG-hZ7Fmbn05nHHxipE5LKvDiBadQqoUaoyGVIolfDMb1k4f~~5Sns3X6Gblo0JL9aN6ntTvpXA-RlZfuhu4ODdamUUpfqbZNHw__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Creative",
                "Perceptive"
            ],
            "matchingStartDate": "2026-02-06",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "64986498-e0b1-70e3-1b1e-c2044b693e95",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi I'm Lizeth, I'm 22 years old, and I consider myself as a loving and dedicated person. I truly enjoy spending time with children and creating a safe and joyful environment for them. At the same time, I have a strong character that allows me to respectfully set boundaries and maintain discipline in a positive way.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-06T21:01:07.689Z",
            "score": 64,
            "opportunityId": "006R700000UpCqhIAF",
            "auPairName": "Lizeth",
            "id": "64986498-e0b1-70e3-1b1e-c2044b693e95",
            "relaxingInterests": [
                "Board games",
                "Gaming",
                "Gardening",
                "Movies",
                "Puzzles",
                "Reading"
            ],
            "updatedAt": "2026-04-28T21:03:54.482Z",
            "lastAppLoginDate": "2026-04-28T21:03:54.478Z",
            "spotlightedReason": null,
            "approvedIQHours": 302.8,
            "profilePictureKey": "protected/64986498-e0b1-70e3-1b1e-c2044b693e95/e69e6a51-0eee-434e-add9-797fef6c558b.jpeg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2246535",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3301.68,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-11-30",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Fishing",
                "Gymnastics",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Crafts",
                "Drawing",
                "Graphic design"
            ],
            "sfId": "001R700000ZX4iFIAT",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64986498-e0b1-70e3-1b1e-c2044b693e95/e69e6a51-0eee-434e-add9-797fef6c558b.jpeg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDk4NjQ5OC1lMGIxLTcwZTMtMWIxZS1jMjA0NGI2OTNlOTUvZTY5ZTZhNTEtMGVlZS00MzRlLWFkZDktNzk3ZmVmNmM1NThiLmpwZWcqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDQ3NjUzfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=PTc7VTgJztiRNPNN558zYYrRgU7NqPI1slgC9VFKzcJ-MA6M7Vf6tE-OX5oBu4KVCsY2loVSIz4s~Az~l0XDDDldqy-hSoaZ~Ai5o8lzOlUCaqfaLer9EaEydVNQIAbIZF~BMGLxdd5KBS9hVz3vNjVN1v1-B~4Do67EV1cydy-hF1kKAgruTeKWJw2uW7IMNYaCcwVfKkBlnGhxZauFhURboNlFkaORC15aaivYiSOSKLTTqYvoDIKE-QDDr09c2O8Sebu1YU1jIwrIgCKYyEodq86CRk9yfzCa84e76qgCRxMhihM8hj4YViyiNaC5a63wtQMqFRSuM1Vk02dqQg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Empathetic",
                "Family-oriented",
                "Funny",
                "Intellectual",
                "Organized",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-03-14",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "649864e8-3031-70f5-267d-df79eecdc851",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "¡Hi dear future host family!\n\nMy name is Ana María, I am 25 years old and I am from Bucaramanga, Colombia. I am studying Financial Administration and working part-time in customer service. I am a loving, patient, and responsible person who truly enjoys caring for others. I would love to become part of your family, share special moments, and build a meaningful connection based on trust and kindness. I am improving my English every day and I am excited to grow together with you.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-14T17:00:58.617Z",
            "score": 64,
            "opportunityId": "006R700000fTwU1IAK",
            "auPairName": "Ana Maria",
            "id": "649864e8-3031-70f5-267d-df79eecdc851",
            "relaxingInterests": [
                "Movies",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:26:22.421Z",
            "lastAppLoginDate": "2026-04-29T01:26:22.415Z",
            "spotlightedReason": null,
            "approvedIQHours": 1966.95,
            "profilePictureKey": "protected/649864e8-3031-70f5-267d-df79eecdc851/1bf4f4c2-578e-4990-aab3-1590ea11ce28.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2374826",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2876.25,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2000-11-10",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Badminton",
                "Basketball",
                "Cycling",
                "Dancing",
                "Martial arts",
                "Roller skating",
                "Soccer",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Drawing",
                "Photography"
            ],
            "sfId": "001R700000m7CvHIAU",
            "totalNumberOfChats": 47,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/649864e8-3031-70f5-267d-df79eecdc851/1bf4f4c2-578e-4990-aab3-1590ea11ce28.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDk4NjRlOC0zMDMxLTcwZjUtMjY3ZC1kZjc5ZWVjZGM4NTEvMWJmNGY0YzItNTc4ZS00OTkwLWFhYjMtMTU5MGVhMTFjZTI4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=L4Q2O24Bi7l9Zj0AF1e503g1h9Lsr1ICBdyWA7ZLV7nRQ5fuN77cAS9LmrJ~OB4Mfvbl3NcESHPca8ArieSzoxy3kURkNBzdCdAa7ax1kxpEd7wc9tL~gSmcPDqrBBbuDd7bVfOLFwQ0CV3RNbhMh23-lSDB9yliW5LWdBA3NOzVpIVbDrB5UVXZNALvzP7gxBC3Ntfnvl79EzONfa-ME1tamF0AGiOMiuqKWAV2bn9mf2s4tX2ESZ4~pY7WF4A6iiAQk5lsvkTpHT8oKrvhSnPar9BSbF0hEbGMTZIWpW25p~Y-5n7o2~kdUbuByJS76sI0dU0DBikpYOedqCNRHw__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Driven",
                "Flexible",
                "Perceptive"
            ],
            "matchingStartDate": "2026-02-27",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "6498b4a8-a071-703c-d1d3-a04ebc5e763c",
            "okToLiveWithPets": false,
            "aboutSelfAndInterests": "I am a simple and genuine person who finds joy in small, everyday moments. Spending time with my nephew helped me understand how much I enjoy being present, playing, talking, and creating a safe space where a child feels loved. I like music, walks, and sharing meaningful moments. I would love to bring positive energy into your home and become someone your children can trust and feel comfortable.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-02-27T22:36:10.618Z",
            "score": 64,
            "opportunityId": "006R700000eXEy2IAG",
            "auPairName": "Carmen",
            "id": "6498b4a8-a071-703c-d1d3-a04ebc5e763c",
            "relaxingInterests": [
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-26T18:52:12.837Z",
            "lastAppLoginDate": "2026-04-26T05:58:58.511Z",
            "spotlightedReason": null,
            "approvedIQHours": 1155.48,
            "profilePictureKey": "protected/6498b4a8-a071-703c-d1d3-a04ebc5e763c/c80f9822-9d36-48b3-97aa-970dfa23f5d0.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2325977",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1246.32,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Italian"
            ],
            "numberOfChildrenCanCareFor": [
                "4+ children"
            ],
            "dateOfBirth": "2003-03-05",
            "monthsLeft": 0,
            "preferredPets": [],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Gymnastics",
                "Running"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Concerts",
                "Makeup"
            ],
            "sfId": "001R700000l3KIeIAM",
            "totalNumberOfChats": 15,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/6498b4a8-a071-703c-d1d3-a04ebc5e763c/c80f9822-9d36-48b3-97aa-970dfa23f5d0.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDk4YjRhOC1hMDcxLTcwM2MtZDFkMy1hMDRlYmM1ZTc2M2MvYzgwZjk4MjItOWQzNi00OGIzLTk3YWEtOTcwZGZhMjNmNWQwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=dOmDP8ESdLqvoiBqFOI0myAygfvsBDrUpsccX3hr8iMIhhRQSm4zrrUDKjKsc29Cd17LazNEdLd3uFU7HsUftIJYZpOEhCIsQPGr6Zc1wAvwFKFEgwO6xxsII3Qd9Vp1A2N1vbKdncnQU8L4R16Clrxp-ltDy7Bp8IRw0PPwtmLOFKaLwU1ksW1nVKgEyqwcDbcoWo1jayFvt6z-49TfjxrwxO6IBooFjxCLQPPOxY9gKT9TY~kwhK6Lk-pzYDgYwi8B-ip6QHZWKr7zuQOlFK1FGfsigJK-B59JZeuRu2uun~oW8NOPljvrdCd4n6fyRyv4ApYaoPDKmEG98mKpxw__"
        },
        {
            "personalityTraits": [],
            "matchingStartDate": "2026-03-14",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "64e804d8-80e1-7097-14f8-c1e0c6414f55",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Dear host family,\nMy name is Shirley Basto (or, as everyone calls me, “Shirly”). I’m 23 years old and I live in Cúcuta, Colombia (a WONDERFUL country). I’m a graphic designer; I like to paint, listen to music, dance, and sing (even though I’m not very good at it 😅). I enjoy various sports, and I love pizza, movies, family outings, traveling to new places, and cooking. I have two nieces and two nephews, and I love spending time with them, whether we’re playing, painting, or just running around.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-14T17:00:58.591Z",
            "score": 64,
            "opportunityId": "006R700000Dv7r9IAB",
            "auPairName": "Shirley Tatiana",
            "id": "64e804d8-80e1-7097-14f8-c1e0c6414f55",
            "relaxingInterests": [
                "Board games",
                "Movies"
            ],
            "updatedAt": "2026-04-29T00:55:14.482Z",
            "lastAppLoginDate": "2026-04-29T00:55:14.477Z",
            "spotlightedReason": null,
            "approvedIQHours": 1237.2,
            "profilePictureKey": "protected/64e804d8-80e1-7097-14f8-c1e0c6414f55/488c89a0-42d1-4874-9ec0-8e125987161b.webp",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL12173486",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5715.4,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-09-25",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-03-21",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-11-13",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cycling",
                "Dancing",
                "Horseback riding",
                "Roller skating",
                "Soccer",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Photography"
            ],
            "sfId": "001R700000EHfUsIAL",
            "totalNumberOfChats": 21,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64e804d8-80e1-7097-14f8-c1e0c6414f55/488c89a0-42d1-4874-9ec0-8e125987161b.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NGU4MDRkOC04MGUxLTcwOTctMTRmOC1jMWUwYzY0MTRmNTUvNDg4Yzg5YTAtNDJkMS00ODc0LTllYzAtOGUxMjU5ODcxNjFiLndlYnAqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDQ3NjUzfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=Z7HJ8Oah3TAPgxqnPZingcL6jLYoUwBakat5vRezXeGpTXeliqz1tMBPcZlUY1zXzn2OOng9Hi-RTVemwFnCFbGIgTOMtc5ikEomCC6Mhvyr8SXtrJvRR1VPcbRCEzmRu7Y6UOvqefo2rlNdJYgo44XPgmQjLRbDbiqKPHpsS4uoHOWJFxqNhQ5EXIUHWfOAXr9vfPnOjXb1kDDSzwnNRJpnBcbxrvtDV3o31p1EBGDvJLwRxSiYm8ZtPcb04FS0maMMAHTkQGUG~SUDIiiN8OC1bjN1bUzQKz-TuHd~KRFFAaQSgMfZx-Zp7GNMvhvjnYh2P731C4I~GvdQWH6~tA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Driven"
            ],
            "matchingStartDate": "2026-01-30",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "74189488-d0a1-7072-bf88-61eeb3029867",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Lucia, I am 21 years old.\n\nI am currently doing civil service, an experience that is helping me grow in responsibility and teamwork.\n\nAt the moment, I do not speak English, but I am very motivated to learn and improve every day.\n\nI am a calm, polite, and respectful person, open to new cultures and ways of life. I hope this experience will be a positive cultural and human exchange.\n\nKind regards,\nLucia",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-01-30T15:01:38.256Z",
            "score": 64,
            "opportunityId": "006R700000cdaNWIAY",
            "auPairName": "Luli",
            "id": "74189488-d0a1-7072-bf88-61eeb3029867",
            "relaxingInterests": [],
            "updatedAt": "2026-04-25T16:00:24.485Z",
            "lastAppLoginDate": "2026-04-20T10:49:03.752Z",
            "spotlightedReason": null,
            "approvedIQHours": 2310,
            "profilePictureKey": "protected/74189488-d0a1-7072-bf88-61eeb3029867/67a078bd-f1d7-44ed-b817-5359aabaa083.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2342534",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2726,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "None",
                "Italian"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2004-08-04",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Makeup",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000iwOwiIAE",
            "totalNumberOfChats": 30,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/74189488-d0a1-7072-bf88-61eeb3029867/67a078bd-f1d7-44ed-b817-5359aabaa083.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NDE4OTQ4OC1kMGExLTcwNzItYmY4OC02MWVlYjMwMjk4NjcvNjdhMDc4YmQtZjFkNy00NGVkLWI4MTctNTM1OWFhYmFhMDgzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTN9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=fC8y2NkmA6KAjO7YuaIy-KrDTgLosdwpwOVkfgpYHqa5gZ99MSt8cIsZH2aeU0oGT1XEGXbLxU5wScGL55kep-UveFX4uwS0tRplm-nPlXpIcTROsLVC784p1Z4Qa4LSg90o81WclNIkG7dG3Cnb6urPM1m7vNxmEb6aPJ9JCOlAw138qKuCqi~KJ5dxyflyO8jYjuXiC3RMuCNhJ7ZL2aCvSAWYDgM3TrySz0cDqtJeumk4A0mnlWOnrl1ImSfXnwow0OxKHcY5ff6-3GLVFjwQVoCeJph4l0uE~Ogv6mQbKfuAUSjIsK0Z5KN9MvKTL-zbl-3hIX4Wll08R86eog__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2025-10-11",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "University",
                "University",
                "High School"
            ],
            "loginId": "74b80488-50c1-7070-b3b0-d9e3f0e4bb96",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Daniela, and here is a little bit about myself. I love enjoying the simple things in life—cooking delicious meals, staying active through sports, and going out for walks to explore. It brings me so much joy and energy sharing these activities with kids, like seeing them having fun, learning, and getting excited about everything; also, I enjoy creating those special moments with laughs and connection that we create together.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-11T16:05:34.809Z",
            "score": 64,
            "opportunityId": "006R700000Ulz1yIAB",
            "auPairName": "Daniela",
            "id": "74b80488-50c1-7070-b3b0-d9e3f0e4bb96",
            "relaxingInterests": [
                "Camping",
                "Walking"
            ],
            "updatedAt": "2026-04-27T18:44:50.888Z",
            "lastAppLoginDate": "2026-04-10T15:03:58.363Z",
            "spotlightedReason": null,
            "approvedIQHours": 2057.2,
            "profilePictureKey": "protected/74b80488-50c1-7070-b3b0-d9e3f0e4bb96/860ae004-5373-4455-8aad-ca20bb88382b.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2246190",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2180,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2000-05-29",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cycling",
                "Dancing",
                "Table tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Concerts",
                "Cooking"
            ],
            "sfId": "001R700000ZTXxKIAX",
            "totalNumberOfChats": 59,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/74b80488-50c1-7070-b3b0-d9e3f0e4bb96/860ae004-5373-4455-8aad-ca20bb88382b.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NGI4MDQ4OC01MGMxLTcwNzAtYjNiMC1kOWUzZjBlNGJiOTYvODYwYWUwMDQtNTM3My00NDU1LThhYWQtY2EyMGJiODgzODJiLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=dKH1ss3ltyCLpYleDFlqw5UOx70f-rC~pzAByi7JepE0BzfZgp0s1OrFnbkmFrjMvwJEH6wturoycQVhCvVtu2~a5uAvQ4m-I9eiveHHRjUvzlXkXcszwYKd1YkKN5LCsZtI2Blfc4J4k-Hjkrmmjf5IijUu5~-Eq1w3RvsNF4m7qhOOmrk0b41q-StUvhGXXVD5CwtlD~eTieeWcMjaBexaQpd3u15GQxOIYY~gPgqFj4gWODAHnnKeUCOJt-ZNi0wu7hoMJlnFhgLW9U6BVIqYjhuyIFurhWWn160wM0BrC9urpp2j3YA-9gLXn8jwJjvqBotYDBCgd6LqhfqmwQ__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "74e894b8-80e1-7017-2fee-2be1155bc99c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Beatriz, and I am a calm, responsible, and caring person. I have experience with children from 3 months to 6 years old, including my cousins, nieces, and daycare kids. I am patient, attentive, and enjoy creating a safe and positive environment.\n\nI like music, art, movies, and outdoor activities. With children, I enjoy drawing, storytelling, and simple activities. I am organized, especially in the mornings, and I always adapt to each child’s needs.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-30T22:48:41.159Z",
            "score": 64,
            "opportunityId": "006R700000fi29nIAA",
            "auPairName": "Bia",
            "id": "74e894b8-80e1-7017-2fee-2be1155bc99c",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Journaling"
            ],
            "updatedAt": "2026-04-29T01:04:22.116Z",
            "lastAppLoginDate": "2026-04-29T01:04:22.112Z",
            "spotlightedReason": null,
            "approvedIQHours": 767.1,
            "profilePictureKey": "protected/74e894b8-80e1-7017-2fee-2be1155bc99c/2c4ce2da-861c-4762-8921-4432367d88d0.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2376869",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5277.6,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-07-31",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Hiking",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking"
            ],
            "sfId": "001R700000mMv5fIAC",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": true,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/74e894b8-80e1-7017-2fee-2be1155bc99c/2c4ce2da-861c-4762-8921-4432367d88d0.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NGU4OTRiOC04MGUxLTcwMTctMmZlZS0yYmUxMTU1YmM5OWMvMmM0Y2UyZGEtODYxYy00NzYyLTg5MjEtNDQzMjM2N2Q4OGQwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=TyXNXn4lbThEDlPxXjja0OIbIb2FLn2l4Wt9paYTb49ypQYjMXWFSWnryPfJ1li6g3Tsn4MVqCsFkWEbXUW2b6eTUPnUbde9Lp3ZHCxHvzLhIbWruoaBTeg3Z6~JINgcSzB7QZ8I06VH60XbjcOPT8un3D4WVdAJWYSUkNGV9sjjH6uUR5Ke7jMIsnU0og2TdToqDgsRp7SiO~vb0tZ6p2jj-rjGCQU99nlUZNZl3vnldjTruKrsKGv-7yWJab1e~ZD1rIUnNUCnqXF7YJ2wE20NM6NBT79vVkeG3H~f3Kfq2s0MkoiK78TuQVQfoOFGqEZKFBFbdUEzC4d1l1e0uQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Cheerful"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "74e8e4a8-b021-70f6-4a08-63a21e2e7411",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, welcome to my profile! I am from Pasto, Colombia, a beautiful place known for its amazing carnivals.\nI love spending time with my family and enjoy simple things like dancing and going for walks.\nI truly love being with children. I enjoy teaching them with patience, love, and care, and I also learn from them.\nChildren are very special to me, and I would be happy to be part of your family.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T16:35:35.865Z",
            "score": 64,
            "opportunityId": "006R700000fFdmDIAS",
            "auPairName": "Alejandra",
            "id": "74e8e4a8-b021-70f6-4a08-63a21e2e7411",
            "relaxingInterests": [],
            "updatedAt": "2026-04-29T00:40:51.870Z",
            "lastAppLoginDate": "2026-04-29T00:40:51.866Z",
            "spotlightedReason": null,
            "approvedIQHours": 1098.65,
            "profilePictureKey": "protected/74e8e4a8-b021-70f6-4a08-63a21e2e7411/e2e0ad2f-e3bf-43cb-93cf-60fa9f881d29.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2371477",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1295.65,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-03-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Gymnastics",
                "Roller skating",
                "Sailing",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [],
            "sfId": "001R700000lr5krIAA",
            "totalNumberOfChats": 0,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/74e8e4a8-b021-70f6-4a08-63a21e2e7411/e2e0ad2f-e3bf-43cb-93cf-60fa9f881d29.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NGU4ZTRhOC1iMDIxLTcwZjYtNGEwOC02M2EyMWUyZTc0MTEvZTJlMGFkMmYtZTNiZi00M2NiLTkzY2YtNjBmYTlmODgxZDI5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=R6RH9q4lX7lIPNN1Pk9TB5dvvHkWGs88Y7CcsCll2cboFwpyBBDp9dN8SLxi1TIbqiqzg6ziq39CXbHbaAQifGlZaKUg0SVCD8ae4QdYUV8f9YWhD4YlYmZXyBwF3qHf-xBb2DvUDMrD6wiDya9-tthZpfEVTqS9mGLOeCtirVJDq7HjKfojAQapErOg1Qh5bUcRYTmTul1l4k7etgszj9F3MFjtmgN5-qt5hj34~V-fhILQc~2RpLtu9~SGnUnp-nC~5NAeqjudkMs9nn24WdNtxiDyzQgUGu5d~gcY9evfjVaUE4g~EnMjLT0hSfVbaqIGdhPumUfZi~oKTcThTA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Funny",
                "Independent",
                "Organized",
                "Trustworthy"
            ],
            "matchingStartDate": "2025-01-24",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "74f854c8-5031-700e-f3a3-c352bdacca28",
            "okToLiveWithPets": false,
            "aboutSelfAndInterests": "Hello, I am Ditta from Hungary! I love reading, writing, watching tv shows, movies and playing with games. I have an older sister who is an maternal and child health nurse. My mom works in a gardening/farm shop as an seller and my dad is a handyman/mechanic at the Budapest Transportation Center. My family and friends are very important to me! I genuinely enjoy spending time with children and try to create a warm and trusting atmosphere where they can feel safe, understood and happy.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-01-24T18:53:30.279Z",
            "score": 64,
            "opportunityId": "006R700000KIABtIAP",
            "auPairName": "Ditta",
            "countryOfBirth": "HU",
            "id": "74f854c8-5031-700e-f3a3-c352bdacca28",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T20:15:54.801Z",
            "lastAppLoginDate": "2026-04-24T20:14:40.024Z",
            "spotlightedReason": null,
            "approvedIQHours": 771.5,
            "profilePictureKey": "protected/74f854c8-5031-700e-f3a3-c352bdacca28/306f916d-6889-465b-8d65-a8cc9bfab3af.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "HU",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "HUN2078114",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years",
                "All ages"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 771.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Advanced - Level 6",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "Hungarian"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-09-25",
            "preferredPets": [],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-08-28",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Badminton",
                "Cycling",
                "Dancing",
                "Handball",
                "Ice hockey",
                "Roller skating",
                "Squash",
                "Table tennis",
                "Tennis"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Concerts",
                "Drawing",
                "Photography",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000LxSKMIA3",
            "totalNumberOfChats": 66,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/74f854c8-5031-700e-f3a3-c352bdacca28/306f916d-6889-465b-8d65-a8cc9bfab3af.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NGY4NTRjOC01MDMxLTcwMGUtZjNhMy1jMzUyYmRhY2NhMjgvMzA2ZjkxNmQtNjg4OS00NjViLThkNjUtYThjYzliZmFiM2FmLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=EqJJe39VR4bXwtURg2clPMNJqdZ-oweYqM309Oh6MGpdWolFqwLHYtV14bgpzFlo6Se1u0JcRGcAjWuehW~uegI2iWYDAQcqqHK6lc0GoA6M3d5fFAcsBsMJZRROZHgmXtAU603zu7egVzFWqd-Vy-5Q7qvXAzXhTDpVL8WUgagERXKLuG-jb~NrJRQBDXebKCnXyvkid0A4JSn5QPVqsmVO9qkV2YDrrUNk2-KYAmnuMcka3f9wEfbLrlnufstpBF4-zxqNLVCCF3V226~gHtQCwgtoy1nO99uIFh0qZneGiZxATs-26ClEa-6l3q~BOLcvXlluJs0MvJzq0WpLPw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Flexible",
                "Funny",
                "Intellectual",
                "Organized",
                "Passionate",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-01-21",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "84280448-7091-7062-30ee-efbbdeb61212",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a fun, energetic, and flexible person, with a strong interest in learning and exploring. I enjoy cinema and discovering new things. I love dancing, and thanks to my knowledge of psychology, I enjoy carrying out motor activities with children that strengthen their independence, cognitive development, and values, helping them grow into empathetic individuals.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-21T19:44:02.176Z",
            "score": 64,
            "opportunityId": "006R700000bwbhpIAA",
            "auPairName": "Sofia",
            "id": "84280448-7091-7062-30ee-efbbdeb61212",
            "relaxingInterests": [
                "Camping"
            ],
            "updatedAt": "2026-04-26T22:50:08.525Z",
            "lastAppLoginDate": "2026-03-16T16:36:27.122Z",
            "spotlightedReason": null,
            "approvedIQHours": 2500,
            "profilePictureKey": "protected/84280448-7091-7062-30ee-efbbdeb61212/3ce3616e-54bf-414e-a744-69372f0a0837.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2335412",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4015,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-06-10",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Drawing",
                "Makeup",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000i6cu5IAA",
            "totalNumberOfChats": 28,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84280448-7091-7062-30ee-efbbdeb61212/3ce3616e-54bf-414e-a744-69372f0a0837.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NDI4MDQ0OC03MDkxLTcwNjItMzBlZS1lZmJiZGViNjEyMTIvM2NlMzYxNmUtNTRiZi00MTRlLWE3NDQtNjkzNzJmMGEwODM3LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=dBs65y1om0zhHEthtP67ytVepvEf5vN0AOEhz7LQwcTEp0QlAOS9mS8RihwalyEw0432E46w~57PiCIQIW2kCxhp7q2FrbUzW2lxDKZ~Y2az4gST8rQRT8JDJBZCB-rgfax9XT7jhei-HUYRnfpLTlhPYW7CC86EBu~wf0ZtpVsjUg2UtP7iGN1Yl36K1I4tjNJtI9X8WLnmqiQWTfpSdZlNX62cUx~~NPcR1GTLgjM9EHJzbmcUfkZ5l9hTetGQaPXYh9z-kixqt2L-u~bG7IKAIXV9pehkI3pkTlZHkbWMvF0Nr9P--xM2S~2UWf068DBRUoIW53SgWgKOWSRJRA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Independent",
                "Intellectual",
                "Organized",
                "Perceptive",
                "Proactive",
                "Warm"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "84487468-8051-70c6-4956-f9371fbdda5a",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I love reading, spending time outdoors, and exploring new places. I also enjoy going to museums, doing makeup, dancing, and cooking. I would be happy to share these activities with my host kids through fun, creative moments and quality time together",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-30T21:03:54.828Z",
            "score": 64,
            "opportunityId": "006R700000gaKOHIA2",
            "auPairName": "Laura Valentina",
            "id": "84487468-8051-70c6-4956-f9371fbdda5a",
            "relaxingInterests": [
                "Journaling",
                "Meditation",
                "Movies",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:01:06.640Z",
            "lastAppLoginDate": "2026-04-29T01:01:06.636Z",
            "spotlightedReason": null,
            "approvedIQHours": 546.24,
            "profilePictureKey": "protected/84487468-8051-70c6-4956-f9371fbdda5a/9577d73f-9ce6-46dc-8d36-12d1eb68eb24.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2384863",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1787.36,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-06-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Baseball",
                "Dancing",
                "Hiking",
                "Table tennis"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Graphic design",
                "Makeup",
                "Photography",
                "Social media",
                "Writing"
            ],
            "sfId": "001R700000nMuAdIAK",
            "totalNumberOfChats": 34,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84487468-8051-70c6-4956-f9371fbdda5a/9577d73f-9ce6-46dc-8d36-12d1eb68eb24.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NDQ4NzQ2OC04MDUxLTcwYzYtNDk1Ni1mOTM3MWZiZGRhNWEvOTU3N2Q3M2YtOWNlNi00NmRjLThkMzYtMTJkMWViNjhlYjI0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=PUxoquGFUZUoEQzttB5VSdy4MxAsV9HNxUlGgpRwdnmjHDYCTkRPUIYEES9YtmFWP87oIwkuaik4yfiB2nvZDY5PMeCBgmP3rOxtB0z2p7QoOpeX9nYnyZm7ffC-22NY4Zo2R9B6mm3BzpTlI9RtDXqBcG5b~c8J~LenwAnZrXxSA6eK-4RjqFX5wfLCqmtp3pbHXTPWLY1y8AIWJcjugb5f2TW2y~WGNXcS6XXmV3RGYArjtvCX-7mivRWCTnbNtsxK-7a7AIwFDKICO6sxSBlJ0uu6Euin~SwR1u5fCBG6EX6HhB3Hg0DVnQQFgBdvvhdok4NG0JjDm5X5VvpvHQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Funny",
                "Proactive"
            ],
            "matchingStartDate": "2026-03-13",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "84c89408-f081-7058-35a8-f51b5d0d3841",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello! I'm Majo, a passionate speech therapist, with experience in clinics, schools and private practice. I develop in child neurodevelopment, early stimulation, speech therapy, MOF rehabilitation and dysphagia. I am affectionate, responsible, assertive and creative. I live a healthy lifestyle and really enjoy working with children, creating safe and supportive environments. I love makeup, taking pictures, seeing new places and going to the gym. I love ice cream, the beach and walking and sunset",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-13T19:01:29.796Z",
            "score": 64,
            "opportunityId": "006R700000eYdSwIAK",
            "auPairName": "Maria Jose",
            "id": "84c89408-f081-7058-35a8-f51b5d0d3841",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gardening"
            ],
            "updatedAt": "2026-04-29T01:17:23.415Z",
            "lastAppLoginDate": "2026-04-29T01:17:23.410Z",
            "spotlightedReason": null,
            "approvedIQHours": 1445.15,
            "profilePictureKey": "protected/84c89408-f081-7058-35a8-f51b5d0d3841/bf5f3f7a-0376-40f0-9aed-132bafcd12c6.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2363256",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2074.87,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-11-30",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000l4oPlIAI",
            "totalNumberOfChats": 29,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": true,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84c89408-f081-7058-35a8-f51b5d0d3841/bf5f3f7a-0376-40f0-9aed-132bafcd12c6.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NGM4OTQwOC1mMDgxLTcwNTgtMzVhOC1mNTFiNWQwZDM4NDEvYmY1ZjNmN2EtMDM3Ni00MGYwLTlhZWQtMTMyYmFmY2QxMmM2LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gfr31rYHj24cv5WPXNP8U26R4NkZmGHI1LpjGjH3zT4eyt0ZI0hO7pWqmrxzci2F41Uza6WY28bClv2e-rOQHPYxa4b7fQG0q0oBjDmSLNX8RHFjV9mpu2HjJPcJh4PLKVCsqqD0QqKWruNtXBYc7bBVIpHlNHiVpFdWK6TtfHdbSHhf7o8b1sQ9NfjmKCXPniSI-13Opu7AWJwMYkl7N9Xhf0TU4QOOWWmCqET5nhh2-ULUMAD4lIykrxqkzDhducVV69dstZsZvI4XZAqmaxTmfWS1529EIZVu0cUtrwP-9VDqLA9mK5uTrv6Ya9z3gjxIJmcdbUW5EeAr09o8ag__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Independent",
                "Organized",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-01-16",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "84d8b468-30b1-70ec-a594-8824a141d12c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Mariana, I’m 21 years old and I live in Medellín, Colombia with my family. I’m currently finishing my internship in International Business, which has helped me become responsible and organized, and I plan to start my au pair experience after completing it.\n\nIn my free time, I enjoy going to the gym, doing makeup, exploring new places and cooking at home. I love being around people and feeling connected, but I also value a little quiet time to recharge.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-16T21:01:08.765Z",
            "score": 64,
            "opportunityId": "006R700000bpuywIAA",
            "auPairName": "Mariana",
            "id": "84d8b468-30b1-70ec-a594-8824a141d12c",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Gardening",
                "Movies",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-28T21:53:01.644Z",
            "lastAppLoginDate": "2026-04-28T21:52:32.457Z",
            "spotlightedReason": null,
            "approvedIQHours": 1874.24,
            "profilePictureKey": "protected/84d8b468-30b1-70ec-a594-8824a141d12c/3c78a565-d411-47b4-b4b8-6d556e3a1195.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2217682",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6793.28,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2004-08-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Gymnastics",
                "Roller skating",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Makeup",
                "Photography",
                "Singing",
                "Social media"
            ],
            "sfId": "001R700000hy9HOIAY",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84d8b468-30b1-70ec-a594-8824a141d12c/3c78a565-d411-47b4-b4b8-6d556e3a1195.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NGQ4YjQ2OC0zMGIxLTcwZWMtYTU5NC04ODI0YTE0MWQxMmMvM2M3OGE1NjUtZDQxMS00N2I0LWI0YjgtNmQ1NTZlM2ExMTk1LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=YYnNlYgywjrOTA-DRXxfpsa4LfkJ3p1A~vBPuflw3VSTgkwL9j4oV4nmX6MjF1c1dnnZSada-mPGMvqpdQGJ-C7VtVkJZhG8qHrEaoz-ky1Finu6fVqYnjIFnC1LzE7PJ1bSYPiSe~Zv7Ap4foLMVdK672FF7RDHwxmTR1GyIwMv8xHXGluslVNqbIfMfhUaw4CG6ntRCwo5ggT~QCmQLtVivH4LZ~uLzza~D79ZynY4rY6as~BQ8zMU0VMhPYx2Je1Y97pWq0B~NJV86~lsBDu6xCwD4b86yKnYt~krmoByVrTGS78mo1mJU40KiyIWN8B6RsJg94m6xNVX4E-wAg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Energetic"
            ],
            "matchingStartDate": "2025-09-19",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "940804f8-5071-70db-48f6-e323fceaf7e1",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Sarah, I’m 23 and I come from Amazonas, Brazil. 🌳🇧🇷 I’m calm, friendly, and easygoing, and I love enjoying simple things in life. I enjoy spending time with family and friends, talking, laughing, playing board games, or watching movies. I also love exploring new places, being outdoors, relaxing at waterfalls, and animals. One of my dreams is to have a farmhouse and live peacefully in the countryside 🥰",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2025-09-19T16:58:32.335Z",
            "score": 64,
            "opportunityId": "006R700000UTszpIAD",
            "auPairName": "Sarah",
            "id": "940804f8-5071-70db-48f6-e323fceaf7e1",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Movies",
                "Reading",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:24:01.596Z",
            "lastAppLoginDate": "2026-04-29T00:24:01.590Z",
            "spotlightedReason": null,
            "approvedIQHours": 1217.1,
            "profilePictureKey": "protected/940804f8-5071-70db-48f6-e323fceaf7e1/e807a198-9cba-4e9c-93d5-054d1ad86ab7.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2030200",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 1217.1,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-04-19",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Martial arts",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Drawing"
            ],
            "sfId": "001R700000HpcvtIAB",
            "totalNumberOfChats": 41,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/940804f8-5071-70db-48f6-e323fceaf7e1/e807a198-9cba-4e9c-93d5-054d1ad86ab7.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC85NDA4MDRmOC01MDcxLTcwZGItNDhmNi1lMzIzZmNlYWY3ZTEvZTgwN2ExOTgtOWNiYS00ZTljLTkzZDUtMDU0ZDFhZDg2YWI3LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=DS5e3sYgUZ0Ele4qnQEMBivPyWCdEocFeI29eaMvzypqmfkr9JRpU2q2lllEZcaJIYgitzFx8XGrr9kt-Z8CinQAnXfa5C05~OLp7UX5O3cQWCt0ILZK7sEYfXss~vJoL-WuWX5DehjB-IRauyQr7VJji3qqmP3wtWCw4xhDv~V28LJau4VtChu3rmter05GeHcR14RjbFf3ClzNetJzEAVlyzMoCkIjzZBAyLzfjs7cgRdpwl1Q7ebXotYyhj4jgaXMoo-jQCgEgXWTRIvBR6OsB8U7CRYUoHvB4bGPIaJi68mnYmodnfBWiJ~HiF5QJKFJtrY5zXJmQ4~cJ8y-YA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Funny",
                "Organized",
                "Passionate",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-09-02",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "9408d498-f0f1-7034-a319-5a4c63bfb364",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi dear host family! My name is Emely and i'm from colombia. I like to dance, sing, and try new and delicious recipes that i've seen on my phone. I really enjoy going to the theme park, go to the cinema, doing picnic days but also sun days in the pool or beach. I like learning new languages and enjoy doing movie nights with my family. I'm a very clean and organize person. Also i like to help others and be kind with everybody.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-09-02T21:32:47.294Z",
            "score": 64,
            "opportunityId": "006R700000Tsue2IAB",
            "auPairName": "Emely",
            "id": "9408d498-f0f1-7034-a319-5a4c63bfb364",
            "relaxingInterests": [
                "Board games",
                "Gaming",
                "Journaling",
                "Movies",
                "Puzzles",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T22:38:29.350Z",
            "lastAppLoginDate": "2026-04-28T22:38:29.347Z",
            "spotlightedReason": null,
            "approvedIQHours": 1018.26,
            "profilePictureKey": "protected/9408d498-f0f1-7034-a319-5a4c63bfb364/83773aad-b7d6-4311-92cd-2e30f3edccde.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2234447",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6060.78,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2005-04-15",
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Basketball",
                "Cheerleading",
                "Cycling",
                "Dancing",
                "Golf",
                "Gymnastics",
                "Lacrosse",
                "Martial arts",
                "Roller skating",
                "Soccer",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing",
                "Social media"
            ],
            "sfId": "001R700000YP9XbIAL",
            "totalNumberOfChats": 53,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/9408d498-f0f1-7034-a319-5a4c63bfb364/83773aad-b7d6-4311-92cd-2e30f3edccde.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC85NDA4ZDQ5OC1mMGYxLTcwMzQtYTMxOS01YTRjNjNiZmIzNjQvODM3NzNhYWQtYjdkNi00MzExLTkyY2QtMmUzMGYzZWRjY2RlLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Sl4kiRRWLvqKNzjj9rllSe9evhQA5cYYVyepzht~J88-bPJ7ctvUBkUTY7HLnKZBLpUYjUGWHKRYmwznTVAJGFH0InpC67a7PrnyyVUJinmVN4-a5S16wcrOcG-dqcTWgI5FSQwTV6qbtaEEfsnu~J5bgUwaXSTwC6KTYyvfhPg5Rp0r8oYth3BtkaY8WGYQeBof~hteLCIwSDO6Qi2r2y~cXYvhPwNdXgfpXIeWAT1DWBhBDcP5smp6iMM9W7l7OzPvBbxZ4-UpEv1Nzj6ZCIPnTnvrLow1gKSvVR6q5V3VOSP2kfwvAlRRss0oLwvYH2z32HdZIsJ40nzFOfRg7g__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2026-04-27",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "94181478-8001-7063-09d1-681a52854edd",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello! My name is Manu. I am a caring, responsible, and kind person who truly enjoys spending time with children. I am the godmother of a little boy named Santi, and I love taking care of him and playing together. I also enjoy singing and dancing, and I really appreciate the joy and innocence that children bring. I am excited about the opportunity to live a new experience and grow both personally and culturally.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-27T16:39:06.312Z",
            "score": 64,
            "opportunityId": "006R700000dkUnsIAE",
            "auPairName": "Manu",
            "id": "94181478-8001-7063-09d1-681a52854edd",
            "relaxingInterests": [
                "Camping",
                "Card games"
            ],
            "updatedAt": "2026-04-29T01:23:17.117Z",
            "lastAppLoginDate": "2026-04-29T01:23:17.114Z",
            "spotlightedReason": null,
            "approvedIQHours": 498.96,
            "profilePictureKey": "protected/94181478-8001-7063-09d1-681a52854edd/b96dd0c9-e2db-4994-83fb-59fb628a7ade.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2183671",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5549.04,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2002-07-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts"
            ],
            "sfId": "001R700000k8AqwIAE",
            "totalNumberOfChats": 0,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/94181478-8001-7063-09d1-681a52854edd/b96dd0c9-e2db-4994-83fb-59fb628a7ade.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC85NDE4MTQ3OC04MDAxLTcwNjMtMDlkMS02ODFhNTI4NTRlZGQvYjk2ZGQwYzktZTJkYi00OTk0LTgzZmItNTlmYjYyOGE3YWRlLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=QyGQHxR-TBfpvhOI6bVxdou1R0QINrI8PEBbapDgRyANZqJh8PfZbNbn2HP7lpaCAI9KZFj8yKVwZAAf~UHiP516GRH-DR5rRbOHTfmfkaI46OAb-BJ8CJ4jOJHBiK6MfZzEoYk~B2FqctA-du~LdHVh5xK5Q7gyWROHiGkNOX3mSSulJf7Zq7MOLSAcdF3R7RcUypRq4boS9Y4omvg6YOvLCPC6MkfQx5mvpLOPAYmsw1OeUkr947ArULtXHPIhrUQnBkeXxMbTLSave3Pv0YtB3HDINnDIPC0YytednB1Su6D7-7PXuVByn9uEvZMOc4YcagxJB-iSpLIZ0ZV2Ww__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Cheerful",
                "Funny"
            ],
            "matchingStartDate": "2026-04-21",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "942834e8-20f1-7045-f494-4722498bd0cb",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, my name is Sara. I graduated as a teacher and I love working with children, especially younger ones. I am responsible, patient, caring, and creative. I enjoy exercising, going for walks, reading stories, doing crafts, and playing games with kids. I am Christian. I would love to support your family and create a safe, fun, and caring environment for your children while helping with their daily routines and activities.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-21T15:50:09.840Z",
            "score": 64,
            "opportunityId": "006R700000cIWMwIAO",
            "auPairName": "Sara Gómez",
            "id": "942834e8-20f1-7045-f494-4722498bd0cb",
            "relaxingInterests": [
                "Camping",
                "Movies",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-28T22:08:43.990Z",
            "lastAppLoginDate": "2026-04-28T22:08:43.985Z",
            "spotlightedReason": null,
            "approvedIQHours": 1234.4,
            "profilePictureKey": "protected/942834e8-20f1-7045-f494-4722498bd0cb/65ea0c7d-3ce8-42a8-ab87-ec29dea1a4d6.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2341230",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4821.76,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-03-30",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Roller skating",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Social media"
            ],
            "sfId": "001R700000iXB9rIAG",
            "totalNumberOfChats": 9,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/942834e8-20f1-7045-f494-4722498bd0cb/65ea0c7d-3ce8-42a8-ab87-ec29dea1a4d6.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC85NDI4MzRlOC0yMGYxLTcwNDUtZjQ5NC00NzIyNDk4YmQwY2IvNjVlYTBjN2QtM2NlOC00MmE4LWFiODctZWMyOWRlYTFhNGQ2LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Zx3KOi0q4SMYzDFeJ3pD9~kRaihEXX9Lq3skeJGJVCpbHxsqBSgMNHvrz2IuVxuubNvrEf~l8b9mE0tVoF4ocd1cNAwbA~Dyn~1xkbffk9Euo4zGTndctXLsIiW4nw6lDfd5B00gBpREESBBP0mXVxXILhXyql190LpBgAEiTd6ZEeWDJ8ELO01ITbBSVirIs-dOJ3lpl80wCXHoPEVAho3ZN5ly1mAsAxC9Mc~CrPQUjpUD-S1FWtFGc05yuQ2FwING5yYXbRILbgsveK78Ti1K9g54HzPZR71r~-crfNOesemXw8o52-3owTSIo-D8w-ZXJt8-y5FZJGHLZkaaLQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-03-26",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University",
                "University"
            ],
            "loginId": "a448b438-30b1-7006-f86f-805987328968",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I'm and I would be honored to become your Au Pair. I hold a degree in Foreign Languages and have over 3 years of experience working with children through teaching. I also spent more than 2 years doing social service, teaching English in vulnerable communities this taught me patience, empathy, and creativity. As the older sister of two younger siblings, I'm responsible, proactive, and attentive to detail. I love cooking, arts and crafts, and music. I speak Spanish, English and French fluently",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-26T17:16:49.896Z",
            "score": 64,
            "opportunityId": "006R700000gDbUcIAK",
            "auPairName": "Yazira",
            "id": "a448b438-30b1-7006-f86f-805987328968",
            "relaxingInterests": [
                "Board games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T23:48:26.640Z",
            "lastAppLoginDate": "2026-04-28T23:48:26.636Z",
            "spotlightedReason": null,
            "approvedIQHours": 1850,
            "profilePictureKey": "protected/a448b438-30b1-7006-f86f-805987328968/12f6680f-83e7-4a1c-a15b-8c87be499910.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2381278",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7112.26,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-07-13",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Dancing",
                "Hiking",
                "Soccer",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Crafts",
                "Singing"
            ],
            "sfId": "001R700000mwPYhIAM",
            "totalNumberOfChats": 7,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a448b438-30b1-7006-f86f-805987328968/12f6680f-83e7-4a1c-a15b-8c87be499910.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNDQ4YjQzOC0zMGIxLTcwMDYtZjg2Zi04MDU5ODczMjg5NjgvMTJmNjY4MGYtODNlNy00YTFjLWExNWItOGM4N2JlNDk5OTEwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=W-o~PeU3sYnspWsVI0FVYoGOv3LJwArdFYcPegHLZaljXAXaBZc921qDmOuNykDOQLr8nIPofRjnmN6DJj646KPFL~E6XWqfvQOQjFHlgQMxCs~Q-VirBp4id8b2hTnru46Q9vk5gCVyYSptc88lRNftRjZF85rDwPLL8axZdazeQcqZyRH91tCUicGKqPn4zMwcJzbLSewFdnKvNqRpJKP~8a7qnuSseA48dSDrE4CExn3gG2~tcM4MoeeW4ugnK4VeJyPdqocfti6cLo4LPEjv3I2yzxYPNo3SR93U~IPd1BUtuEic0uxcf82bar8JdUjtnHd0vjLJqjWBDsom0A__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Creative",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-01-21",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "a498f498-a021-7054-475b-652c983b58bd",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Daisy, I’m 22 years old, and I’m a responsible, caring, and energetic person who truly loves being around children. I believe childcare is not just about supervision — it’s about connection, guidance, and creating a safe and loving environment where kids can grow and feel supported.\nI’m organized, patient, and mature, but also playful and creative. I enjoy engaging in activities, encouraging learning, and being a positive role model in children’s lives.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-21T15:01:40.192Z",
            "score": 64,
            "opportunityId": "006R700000ZuIKhIAN",
            "auPairName": "Daisy",
            "id": "a498f498-a021-7054-475b-652c983b58bd",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T08:54:56.617Z",
            "lastAppLoginDate": "2026-04-28T08:54:56.612Z",
            "spotlightedReason": null,
            "approvedIQHours": 502.9,
            "profilePictureKey": "protected/a498f498-a021-7054-475b-652c983b58bd/b70ff31a-6f85-4cc3-a4b1-199a54eeae70.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2306700",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4232.9,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-01-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Badminton",
                "Cycling",
                "Swimming",
                "Table tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Makeup",
                "Photography",
                "Writing"
            ],
            "sfId": "001R700000fkNtHIAU",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a498f498-a021-7054-475b-652c983b58bd/b70ff31a-6f85-4cc3-a4b1-199a54eeae70.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNDk4ZjQ5OC1hMDIxLTcwNTQtNDc1Yi02NTJjOTgzYjU4YmQvYjcwZmYzMWEtNmY4NS00Y2MzLWE0YjEtMTk5YTU0ZWVhZTcwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=UiX6BAnzMTAcMiBVcTRE2VsLlzeu40zYn-B8aYlMKkH~BkYEu4wcx3Mal1gozGrGRcN7NpWnDKzbcwM9FN2JTVY6pqYSsq8iBLu-VhUSQeYlxdZVAlLmZDMuCudr7kDiEXA7~vDHo1kANMH8c1~CRivW3jeXgl2yIsJhCMR-PnuIJlbP6sRGI8PUwWuknZjSdWvdLUAyj~hq~uIDiiIoWMoG0hZ0mwpqAHYBjf-cd1CO1XjfpOLLsSSX5LUbBjVfCam3Gy42YmrmlvuTxgAEPYQRP-d6jzuqn-6nYTVgabm0OrseTLaCp9g1qLm-n0d3qxWl7vTDeEjdaqxsppAOYQ__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Athletic",
                "Calm",
                "Creative"
            ],
            "matchingStartDate": "2026-03-20",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "a4b86478-9011-70ae-e2fb-ed02493eba5e",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello dear family!  🌟🤭\nI’m Natalia Baquero, 24 years old, from Colombia. I’m studying Early Childhood Education because I love supporting children in their first learning steps. I’m calm, cheerful, and responsible. I enjoy traveling, going to the gym, painting, and learning new things. I’m excited to share this experience with you and care for your little ones with love.\nSee you soon! ❤️",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-20T15:30:41.957Z",
            "score": 64,
            "opportunityId": "006R700000alVV3IAM",
            "auPairName": "Natalia",
            "id": "a4b86478-9011-70ae-e2fb-ed02493eba5e",
            "relaxingInterests": [
                "Camping",
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-29T00:22:08.321Z",
            "lastAppLoginDate": "2026-04-29T00:22:08.316Z",
            "spotlightedReason": null,
            "approvedIQHours": 613.68,
            "profilePictureKey": "protected/a4b86478-9011-70ae-e2fb-ed02493eba5e/559931db-0af8-4729-a787-f3a2a2c781ac.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2314116",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7042.2,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-03-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Gymnastics",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup",
                "Photography",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000gk9mVIAQ",
            "totalNumberOfChats": 32,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a4b86478-9011-70ae-e2fb-ed02493eba5e/559931db-0af8-4729-a787-f3a2a2c781ac.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNGI4NjQ3OC05MDExLTcwYWUtZTJmYi1lZDAyNDkzZWJhNWUvNTU5OTMxZGItMGFmOC00NzI5LWE3ODctZjNhMmEyYzc4MWFjLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=C~gUbre~kOqKcKk1c7qLCuyBEaBttWbXvZdGjsXiPUaRBjBDmyvmp-TOqpYbRQ-ClyCiu~OZFLw8hwambMUOHMh7oUYZJp7gCJveuGCCAeT0RpnY278SCKjtNFIMNZcx9-xg2fKzgdhRMW5onaity53eC2aQTAO7295577vV5zdJcoq2zxzYm~T1GC~f-1Fw3YNMSOO0ormxzUVat0E14ItwAki7oYpnXbM~rhPE8UaduEkQqq0uf0znOTzBYVOAjwo1miRA-R8QHjq1lEtwWEZk8~uiBmud1OJoPRxfvt46q9QkO5iCtQxuAebWrYYGgdlzKkOkoM7BNhWsktMu3g__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic",
                "Funny",
                "Independent",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-04-17",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "a4f89458-60e1-70ef-8df3-f36f1aaf4350",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Ana Sofia, I am 25 years old, and I am from Colombia. I am an empathetic, responsible, loving, and patient person with strong values. I grew up in a supportive family with values grounded in God. I enjoy serving others and building meaningful connections. I truly enjoy spending time with children and creating a safe, caring, and fun environment where they feel happy, supported, and understood. I am also sociable and enjoy sharing with others, always bringing a positive attitude.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-17T20:01:17.902Z",
            "score": 64,
            "opportunityId": "006R700000gGk0IIAS",
            "auPairName": "Ana Sofia",
            "id": "a4f89458-60e1-70ef-8df3-f36f1aaf4350",
            "relaxingInterests": [
                "Board games",
                "Journaling",
                "Movies",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:20:36.951Z",
            "lastAppLoginDate": "2026-04-29T01:20:36.948Z",
            "spotlightedReason": null,
            "approvedIQHours": 1528.5,
            "profilePictureKey": "protected/a4f89458-60e1-70ef-8df3-f36f1aaf4350/d7c57397-62a9-4855-ba68-7325d3d1f37d.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2382041",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3085.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2001-01-13",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking"
            ],
            "sfId": "001R700000mzpmlIAA",
            "totalNumberOfChats": 10,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a4f89458-60e1-70ef-8df3-f36f1aaf4350/d7c57397-62a9-4855-ba68-7325d3d1f37d.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNGY4OTQ1OC02MGUxLTcwZWYtOGRmMy1mMzZmMWFhZjQzNTAvZDdjNTczOTctNjJhOS00ODU1LWJhNjgtNzMyNWQzZDFmMzdkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=bK8FiToVMesjQGBnophsXiI7-V8ytw8u2nZrVB4bdcmtRxihG8JjQtxXEaFNbY69xK-PKM0eKFYP~T8p86XeRh9z2jJC2hye7f9pHvKcFlhr1sHWw0TlxqpRR277zIuB2CAkxcLXK57zR3CFePnOMtck1x3Rj7hUipVmwYWEDT83TsGj~EkyLT0lcJiTyJQmrHmODs1z8fJD7PBve7aBOivvj4FFgveNpO8GkQ9xHzLvCuZzKGXLvZ7ivIrpYfaweGaCDQMmujKlHvfO8fxVRAnYhxJXQk5wMPG10O48rRH0O0q90P3woqvDVq7rLKm94cHlSkkUP12mBhMVt2lIHw__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Athletic",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Flexible",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-11-18",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University",
                "University"
            ],
            "loginId": "b4785488-9031-70ac-4f98-31e41bf08f85",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m Emanuelle, a licensed psychologist and educator with many hours of childcare experience, from babysitting and camps. I’m a strong, determined, efficient, outgoing, warm-hearted, and love helping kids grow with respect and joy. I want to be a support your routines, share cultures, and create happy memories together. I value trust, communication, and kindness.I love coffee, nature and movement, and HP with his motto of loyalty, friendship and courage. My friends say I'm an inspiration.🏳️‍🌈",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-18T15:57:53.516Z",
            "score": 64,
            "opportunityId": "006R700000VCzAjIAL",
            "auPairName": "Emanuelle/Manu/Ema",
            "id": "b4785488-9031-70ac-4f98-31e41bf08f85",
            "relaxingInterests": [
                "Camping",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T21:46:35.007Z",
            "lastAppLoginDate": "2026-03-13T04:57:22.376Z",
            "spotlightedReason": null,
            "approvedIQHours": 1569.85,
            "profilePictureKey": "protected/b4785488-9031-70ac-4f98-31e41bf08f85/5d62d6f1-6dd9-469a-8723-820233a26e34.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2251555",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2142.47,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2000-03-27",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-04",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Hiking",
                "Horseback riding",
                "Martial arts",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000ZztwIIAR",
            "totalNumberOfChats": 67,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/b4785488-9031-70ac-4f98-31e41bf08f85/5d62d6f1-6dd9-469a-8723-820233a26e34.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9iNDc4NTQ4OC05MDMxLTcwYWMtNGY5OC0zMWU0MWJmMDhmODUvNWQ2MmQ2ZjEtNmRkOS00NjlhLTg3MjMtODIwMjMzYTI2ZTM0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=UwBqSGVSmzIfreKGjC3HeAPazvxFTxHokV1Ay-gzMVKGbnUzfaDmB6S8mewZ3Y5f18kjITWGbBDxaOkabPtOeDfQhCHyVb1aVqsT7PeWD4oTSo~lz2FmV66KgXNmc3D38-ZdBmgKMGx72T8ZWoU7D5CwicZNj3~C-T~RmACacNb3iuhyzs21toAr0jbwq5tNl4wzZwieV-VBozUz8Nud2kez~-d8gqUfo4F76X7-Qdbnz83GVcpILwQx6tZagLbDUMp03LVYTWqaA99PbhwzdzU9x1crSgIwKk7-Z5qT-n0nt28GzPJuwYndKTzl4A-temkSu-M-LtPP0ZqXKh1FTQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-03-14",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "b4a81498-d0c1-703a-b98d-620e546d65ae",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I truly enjoy studying and learning new things, because gaining knowledge is very important to me. I love helping children with homework and educational activities in a patient and supportive way. I also enjoy playing games, encouraging creativity, and building meaningful connections with kids. I believe childhood should balance learning and fun. I would love to share Brazilian traditions and create a safe, caring, and positive environment where children feel happy, confident, and supported.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-14T22:00:54.120Z",
            "score": 64,
            "opportunityId": "006R700000f08MWIAY",
            "auPairName": "Isabelly",
            "id": "b4a81498-d0c1-703a-b98d-620e546d65ae",
            "relaxingInterests": [
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:50:13.078Z",
            "lastAppLoginDate": "2026-04-28T13:27:07.688Z",
            "spotlightedReason": null,
            "approvedIQHours": 3450.65,
            "profilePictureKey": "protected/b4a81498-d0c1-703a-b98d-620e546d65ae/9694335b-2770-4f6d-960b-7f5ed9565259.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2273542",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4513.45,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-07-28",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Running",
                "Swimming",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000laeGnIAI",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/b4a81498-d0c1-703a-b98d-620e546d65ae/9694335b-2770-4f6d-960b-7f5ed9565259.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9iNGE4MTQ5OC1kMGMxLTcwM2EtYjk4ZC02MjBlNTQ2ZDY1YWUvOTY5NDMzNWItMjc3MC00ZjZkLTk2MGItN2Y1ZWQ5NTY1MjU5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=bAxkqyh1yChAea9vKUcyRssM0gK7nf0ZkfvuIm4CbPoqIKHDqnX2Ey~q8TiY9fjbFCRAePs2ltVFzTegGPl8ZhQciqzPxxHbXQN2m4KB3wQHnxiH9tDNe0ye7YxKCpAc0EiYsvPD~GJi-AQh1DgiyLzbn8Yl5PmFPCLywzKzhAv8PVVWOUaspolN07fJHu6sHF6TxgBNkM75WuELaF3KKmZUseD-Hhj3glD~0yMCqZEix7Dzzs3QV-sL5ysOS0rBvNJWXXeh~PUuL2jiRfwdIY7bUa7lpCgeiguDcx8aVUiDtzZkxnyasN~2C6KF-4HdPVwp6TV~v8xZBdKakX0vsQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Laid-back",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-11-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University",
                "University"
            ],
            "loginId": "b4d87498-3061-70e3-d8dc-74d8b40d7d3c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello dear host families! 🇨🇴✨\n\nMy name is Carolina, and I’m a kind, patient, and responsible person who truly enjoys caring for children and supporting their daily routines 💕\n\nI’m creative and love art, music, and outdoor activities like going to the park 🌿🎨 I also live independently, so I’m organized and able to manage my responsibilities with maturity and commitment 💪\n\nI would love to be part of a warm family and create meaningful experiences together 💛",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-28T19:00:14.450Z",
            "score": 64,
            "opportunityId": "006R700000XZA4kIAH",
            "auPairName": "Caro",
            "id": "b4d87498-3061-70e3-d8dc-74d8b40d7d3c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:12:10.309Z",
            "lastAppLoginDate": "2026-04-29T01:12:10.305Z",
            "spotlightedReason": null,
            "approvedIQHours": 1478.55,
            "profilePictureKey": "protected/b4d87498-3061-70e3-d8dc-74d8b40d7d3c/713e911a-77dd-42e4-99fe-1fa3e76dae73.webp",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2279373",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3267.83,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-03-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Badminton",
                "Baseball",
                "Basketball",
                "Cheerleading",
                "Cricket",
                "Cycling",
                "Dancing",
                "Field Hockey",
                "Fishing",
                "Golf",
                "Gymnastics",
                "Handball",
                "Hiking",
                "Horseback riding",
                "Ice hockey",
                "Lacrosse",
                "Martial arts",
                "Pickleball",
                "Roller skating",
                "Rugby",
                "Running",
                "Sailing",
                "Skateboarding",
                "Skiing",
                "Soccer",
                "Softball",
                "Squash",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball",
                "Water sports",
                "Wrestling"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing",
                "Social media",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000ct88kIAA",
            "totalNumberOfChats": 21,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/b4d87498-3061-70e3-d8dc-74d8b40d7d3c/713e911a-77dd-42e4-99fe-1fa3e76dae73.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9iNGQ4NzQ5OC0zMDYxLTcwZTMtZDhkYy03NGQ4YjQwZDdkM2MvNzEzZTkxMWEtNzdkZC00MmU0LTk5ZmUtMWZhM2U3NmRhZTczLndlYnAqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDQ3NjU0fX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=I0G53TP0WJZQLfcHm-E9uQYQr85-xC10wSmf49WRs7Qlt12fiplMrhTPdZ89XnnqD32E2d4nsdKJ0wPNOGF~Vg3SM5JkonVOe0XEG5XYLT3oec~NeNq43dF82~i8h5b5HZic7~hnlMYfx45tOlhrt1AZkQgzo8sffUB2JpZZtownklR5flpVrsmZSYQdKjwwIT53GouN-Q3swimBtI7NNTfjYrvLt0vBG9hvwIq5Ad3yyC-fknVv3nlYvHp8aUclqEU8AXqoEiG4eGsxf8SinvvTEePEydEoYMXXRVBphUZNyhKDg4yo7BLjPBVB0AUImih1nVZakT1OK6ghSRqMLg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Organized",
                "Passionate"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "c4689468-c0c1-7074-f3f8-e2c2bd493c5b",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, my name is Fanny i am twenty four years old, I am from Colombia. i studied assistant accountant, about my personality i am very empathetic, responsible, creative, kind, friendly, funny and cheerful, about my hobbis i like playing volleyball, playing tenis, riding the bycicle, drawing, paiting, whaching movies and lisen to music. \nthat's all",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-30T19:24:41.107Z",
            "score": 64,
            "opportunityId": "006R700000YJEOhIAP",
            "auPairName": "Fanny",
            "id": "c4689468-c0c1-7074-f3f8-e2c2bd493c5b",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Movies",
                "Reading"
            ],
            "updatedAt": "2026-04-29T01:27:27.981Z",
            "lastAppLoginDate": "2026-04-29T01:27:27.977Z",
            "spotlightedReason": null,
            "approvedIQHours": 4808.16,
            "profilePictureKey": "protected/c4689468-c0c1-7074-f3f8-e2c2bd493c5b/49dae5df-f6dd-4552-9231-9c515931d5db.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2244090",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 17752,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-09-20",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Fishing",
                "Horseback riding",
                "Roller skating",
                "Running",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000dplGBIAY",
            "totalNumberOfChats": 9,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c4689468-c0c1-7074-f3f8-e2c2bd493c5b/49dae5df-f6dd-4552-9231-9c515931d5db.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDY4OTQ2OC1jMGMxLTcwNzQtZjNmOC1lMmMyYmQ0OTNjNWIvNDlkYWU1ZGYtZjZkZC00NTUyLTkyMzEtOWM1MTU5MzFkNWRiLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=APZjVlpovZaB9Lycr0p48Q7uK6LufKH7d583UvuG38aQ4VDJk4R-XWsTk9vQK65ga-vdc8m4BZa3MFc94K05oyqyaeX5tYb4WqcxNGbDtA4P7g7-jYeQKhS9WyuvduAGXxSBbGHrqGAVRSCT0XTvv~DW2seSEdpB0PAV7m6jmkVcq1RX6PeMqa~pHbx0sYg~GXlfX-Mz2385R66jpMv3IBWN9sy7bHYlG-OlPS32AMyHRnYDgdz9YbVgGNNecvic0jhY~XV-OmcEZ8p8jY2hqmHfScEhRKTFn~0bK588FQ82DiNuSQQrJOPJYjvBzUC9m21zHKhS8oeGY3bU2suRog__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Funny",
                "Independent",
                "Organized",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-04-09",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "c47854a8-f091-7081-0e99-73edcefa271b",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Fernanda.  I am from Colombia and a I live in Tunja, Boyaca. I am a calm and friendly person. At first I can be a little shy, but I like learning and improving. I enjoy working with children and helping them feel safe and understood. When a child has a tantrum, I stay calm and talk to them. I like drawing, painting, and playing. I also enjoy going to the park and playing sports. I am responsible, patient, and I always do my best.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-09T14:04:33.275Z",
            "score": 64,
            "opportunityId": "006R700000E34rYIAR",
            "auPairName": "Fernanda",
            "id": "c47854a8-f091-7081-0e99-73edcefa271b",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Journaling"
            ],
            "updatedAt": "2026-04-28T23:58:45.748Z",
            "lastAppLoginDate": "2026-04-28T23:58:45.743Z",
            "spotlightedReason": null,
            "approvedIQHours": 989.95,
            "profilePictureKey": "protected/c47854a8-f091-7081-0e99-73edcefa271b/2bff4cb8-7695-4336-b859-3c65d7a25a88.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL14325014",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2954.25,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2000-05-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Dancing",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Crafts",
                "Drawing",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000EN5yOIAT",
            "totalNumberOfChats": 9,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c47854a8-f091-7081-0e99-73edcefa271b/2bff4cb8-7695-4336-b859-3c65d7a25a88.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDc4NTRhOC1mMDkxLTcwODEtMGU5OS03M2VkY2VmYTI3MWIvMmJmZjRjYjgtNzY5NS00MzM2LWI4NTktM2M2NWQ3YTI1YTg4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=cg9fY-tVQc8UErLlc23HwHbuAp0ugxb4sgJ9A5zcV2JOWZjzl327lcb-iESUY~HAoEZw7qsDVx5wuBv9FAjhftKUD7EbIDasYdReHYbjzPfY-5mI~oD4X0qMMDVgYKFeHFt3CIPmQAZVgdm8ZxXrNwcXpdGthU6lSbFZR9OvIyW-9v50R9sxAa4WECXzR2Dp7mVvcPn8yOZt9UBU963PO9KZekE43hI4-N8sLDjPbAyKkx9kaeGxtraTE3b5z6dOqYKQhc~KDERslkxqU-wkLSk51TnT-czlEhwukjHNuD8nl~P6oPowrlrxarPj0y~3rFkt7B~C0RIiFBBnpR8sWQ__"
        },
        {
            "personalityTraits": [],
            "matchingStartDate": "2026-02-27",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "c48814e8-a0d1-709c-ea53-b136ae252236",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Barbara, I’m 23 years old and I’m currently in my third year of a degree in Educational Sciences. I chose this field because I truly enjoy working with children and supporting their growth and development. I have already completed an internship in a nursery school, and I will soon start another one to continue gaining experience.\nOn weekends I work in a pub to earn some extra money and support myself, as I share an apartment with other girls. This experience has helped me beco",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-27T19:01:29.700Z",
            "score": 64,
            "opportunityId": "006R700000ehUrrIAE",
            "auPairName": "Barby",
            "id": "c48814e8-a0d1-709c-ea53-b136ae252236",
            "relaxingInterests": [
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-28T16:14:54.241Z",
            "lastAppLoginDate": "2026-04-22T15:59:29.704Z",
            "spotlightedReason": null,
            "approvedIQHours": 2523.9,
            "profilePictureKey": "protected/c48814e8-a0d1-709c-ea53-b136ae252236/3178d74e-5093-4a17-87fc-9d69ebcfbb7f.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2366234",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2523.9,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Spanish",
                "Italian"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-02-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000lF4ufIAC",
            "totalNumberOfChats": 16,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c48814e8-a0d1-709c-ea53-b136ae252236/3178d74e-5093-4a17-87fc-9d69ebcfbb7f.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDg4MTRlOC1hMGQxLTcwOWMtZWE1My1iMTM2YWUyNTIyMzYvMzE3OGQ3NGUtNTA5My00YTE3LTg3ZmMtOWQ2OWViY2ZiYjdmLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=fOWWltkQqGreJYd-7mfNhctwBiJmxc7zO6pQkxZRvhRcYfwz0TpRPxW-ZvjxEav7qt-~jIbdOVIefdiAJpW0c6lWRH-tWENsJLVU7Xb9tl~hXR0gX2fGWlaADH4OsGo1k7Ic5sD8mzZh5qHc3RC6zRdfnY8t~577BrBvV2BUyKb9tMoeDHK3982h1BftblsjsU97-IiqyqMtW1YVChENmAqI6i-ecRbYlFGLsvnnv-h66tISFw4MCElGcyBSaMZzNgD08eOgZo63yRhj94bdBK~i9Nv-us9Yv5xy8rK7a3lktXtzCrqBVjobgv0BA8xRbXe4zf95QtfzerOE6PRECQ__"
        },
        {
            "personalityTraits": [
                "Assertive",
                "Athletic",
                "Calm",
                "Creative"
            ],
            "matchingStartDate": "2026-03-27",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "c4989458-20c1-70e7-f158-c13c6d317609",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Dear host family, my name is Hemilly, I'm 24 years old, I'm from Rio Real Bahia, but I've been living in Salvador with my family for almost 20 years.\nI am naturally in love with children, I have 9-year-old twin sisters that I have helped raise since they were little.\nI am in love with American culture and my goal with the Au Pair is to learn a new language, to be able to study at an American university and live with a welcoming family, that I can give all my dedication and all my love for kids.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-27T14:56:18.686Z",
            "score": 64,
            "opportunityId": "006R700000DuuHaIAJ",
            "auPairName": "Hemilly Victória",
            "id": "c4989458-20c1-70e7-f158-c13c6d317609",
            "relaxingInterests": [
                "Gardening",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:01:18.340Z",
            "lastAppLoginDate": "2026-04-29T01:01:18.336Z",
            "spotlightedReason": null,
            "approvedIQHours": 390.72,
            "profilePictureKey": "protected/c4989458-20c1-70e7-f158-c13c6d317609/d398639e-46af-454d-b430-b89d83b8aec4.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA13511648",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 390.72,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-02-28",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-08-07",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Running"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Graphic design",
                "Makeup",
                "Musical instruments"
            ],
            "sfId": "001R700000EH2sIIAT",
            "totalNumberOfChats": 20,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c4989458-20c1-70e7-f158-c13c6d317609/d398639e-46af-454d-b430-b89d83b8aec4.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDk4OTQ1OC0yMGMxLTcwZTctZjE1OC1jMTNjNmQzMTc2MDkvZDM5ODYzOWUtNDZhZi00NTRkLWI0MzAtYjg5ZDgzYjhhZWM0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=CnYRhJQ~bej9y1KuuG6rYCq-VpTPQRmP08e2uq1yqRLeKX-YbGgnV8rjaa0jG5UgSYbsHTH-0Pao0BIbsNh8nHufgEPioskAjCOAYVvntm4Nw392XaxxjcAxK3ABqaVKlI2-5OQTXsQ4bGrJYxeqm4IsgjJOgLCYcjZX0WZkqp5XMf76tFsBjR3IxepEtagbykdXhzQC2wKoorB~oejtrZ4lbNhffsiXrA1WQMvsVcS97-fmBg8c48Ob43twU05CCINLyQ5s7hHcghod6A--qICYqxwjL5qjHqXrthZSeMFYQL3iH5TuOsszkJJCsme07NgecMVOBdjgCHII7TrpqQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic",
                "Flexible",
                "Funny",
                "Independent",
                "Organized",
                "Perceptive",
                "Proactive"
            ],
            "matchingStartDate": "2025-03-06",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "c498e448-4051-704c-83ae-a56ce41b3805",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, dear moms and dads!           My name's Marina, I'm 25 years old, I have a degree in business administration and other complementary courses. I am passionate about knowing and learning new things, and I enjoy taking care of children. I would like an opportunity to be part of the family and be able to make the children's moments unforgettable and unique so that they have the best childhood memories.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2025-03-06T19:55:42.535Z",
            "score": 64,
            "opportunityId": "006R700000Dvz1aIAB",
            "auPairName": "Marina",
            "countryOfBirth": "BR",
            "id": "c498e448-4051-704c-83ae-a56ce41b3805",
            "relaxingInterests": [
                "Card games",
                "Gaming",
                "Gardening",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:11:08.128Z",
            "lastAppLoginDate": "2026-04-29T01:11:08.124Z",
            "spotlightedReason": null,
            "approvedIQHours": 3135,
            "profilePictureKey": "protected/c498e448-4051-704c-83ae-a56ce41b3805/4a0bed43-c0d1-4ba6-863a-e5d1fbc37b4a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA13963799",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years",
                "All ages"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7677.9,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2000-05-09",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2027-05-21",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Hiking",
                "Running"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking"
            ],
            "sfId": "001R700000EHqG7IAL",
            "totalNumberOfChats": 47,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c498e448-4051-704c-83ae-a56ce41b3805/4a0bed43-c0d1-4ba6-863a-e5d1fbc37b4a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDk4ZTQ0OC00MDUxLTcwNGMtODNhZS1hNTZjZTQxYjM4MDUvNGEwYmVkNDMtYzBkMS00YmE2LTg2M2EtZTVkMWZiYzM3YjRhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=hRvOv6bOKJBzfcmteBi6ph9IKnEa0spIIf4uxtwvarEnT1VfVqZq5wLZkH9TYfjandlGGcDmTg6WFztuAyLx9sdyk3dAp7oMXRwZY4aP9p5dj13MhJr~4oF8-i4pYOwAcwa8Vf8SXiY7IZNN2DOUzPipWCwOVhsGCxbhNz~qU0wo26efIIW~GaqmpsrcDTtREF6HIfU5tU7CWBK2BWQatb-5pA1sYaK268VdSwCU1~42nizq84WUoMsizjfzRVGkWSUaEGqBPdwmUsge~WtrR3uhK6pQ6uurR43fqf~8gtPD-swWn8Tg2ODCANZQHrx2MtJQYmYZiaMlL~EaCgtnUQ__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Athletic",
                "Calm",
                "Cheerful",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-02-20",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "d4189478-b061-70b0-1779-ebd923ec2aab",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I’m Viola, i live in Italy, near Venice. I live with my mom and my younger sister who’s 17 y/o.  \nI love traveling a lot to see as many places as possible and learn new things, I enjoy immersing myself in other cultures. I’am very empathetic.\nI love sports, the last one I did was artistic gymnastics. I enjoy cooking, and I adore board games. I also like staying with kids because they make me smile.\nI like going out with my friends to the cinema or dancing. I tend to surround with people.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-20T17:01:32.621Z",
            "score": 64,
            "opportunityId": "006R700000eDelOIAS",
            "auPairName": "Viola",
            "id": "d4189478-b061-70b0-1779-ebd923ec2aab",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-27T11:25:42.662Z",
            "lastAppLoginDate": "2026-04-27T11:24:26.410Z",
            "spotlightedReason": null,
            "approvedIQHours": 248.7,
            "profilePictureKey": "protected/d4189478-b061-70b0-1779-ebd923ec2aab/46698674-cc7f-482e-9316-151ab1561449.png",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2361367",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4285.95,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Italian",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2004-05-20",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Basketball",
                "Dancing",
                "Gymnastics",
                "Roller skating",
                "Soccer",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000kgcRUIAY",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d4189478-b061-70b0-1779-ebd923ec2aab/46698674-cc7f-482e-9316-151ab1561449.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDE4OTQ3OC1iMDYxLTcwYjAtMTc3OS1lYmQ5MjNlYzJhYWIvNDY2OTg2NzQtY2M3Zi00ODJlLTkzMTYtMTUxYWIxNTYxNDQ5LnBuZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=HMlZj7deKN0Q6be9kMCgjwgkZY54kaUHthBDKttl-FG8QXjSsEku505uMKRAkUpWCbq0VMMYSjt9fqGiB-ULDm2p7aUA3NcdcJ1Im1favWRHPrCtbMzzs9n00kjEFK9XJMjedR-L-HrFslBRMfQDklko7MD1jT5iAd6AIseIZHVxAE4Owyivkl5qXKjfPPi5cA-bzUm1NqfuZsDCQZBZX6d6zBD4VvDqY3E4mB4oIBVbgFrvVwNlqeeh5AQLRoynzy~9YbXp0NMNlftv49UAPDl2UevjxlD7eModF6WLCkf6celEUyy0EaGqBMGfHTqyz-cBhDkxZkJkqFuNF9V1~Q__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Flexible",
                "Funny",
                "Independent",
                "Passionate",
                "Warm"
            ],
            "matchingStartDate": "2026-03-12",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "d44844f8-90c1-7038-11e6-834441cc6c9c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi!! My name is Isabella,but can you tell me bela or isa, I am a very patient person, responsible with my things, I want to continue improving and learning many things, I consider myself very calm and peaceful. I like to reading books, i love listening music, my favorite are jazz, salsa, pop, reggaeton. I am a third-semester undergraduate student in languages. I like the pets, for me is the best in the word. I life in cali, the city of salsa, I like to dance.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-12T21:18:27.954Z",
            "score": 64,
            "opportunityId": "006R700000a02BZIAY",
            "auPairName": "Isabella",
            "id": "d44844f8-90c1-7038-11e6-834441cc6c9c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Gardening",
                "Journaling",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:11:26.426Z",
            "lastAppLoginDate": "2026-04-29T01:11:26.422Z",
            "spotlightedReason": null,
            "approvedIQHours": 210,
            "profilePictureKey": "protected/d44844f8-90c1-7038-11e6-834441cc6c9c/85ac7e59-cc67-45b4-87f2-f2d7de78070b.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2308192",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 210,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2005-01-28",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cycling",
                "Dancing",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000fqRpLIAU",
            "totalNumberOfChats": 14,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d44844f8-90c1-7038-11e6-834441cc6c9c/85ac7e59-cc67-45b4-87f2-f2d7de78070b.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDQ4NDRmOC05MGMxLTcwMzgtMTFlNi04MzQ0NDFjYzZjOWMvODVhYzdlNTktY2M2Ny00NWI0LTg3ZjItZjJkN2RlNzgwNzBiLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gAUG-ku6VK-ZvzafuaVmiS5Mx88k7ctS22Iu3XV5sh2Y2oA6LGU2-u71H9tp72D0xOMlkakE3Zuo~yI5e2H8G3txumTaCbBRe1Z5NWAKA~92WcjUZjRXLtu3pXNuvdkSnUaHeGL4C0XNmTQ1d9DO5WPLx8aF1Q5ceuCQ04v9GwirJM2RwUgMgGuw0w~5lKhSqdP8tlRy-3WhoT-MEL9x2D1w5DaSD3~P0m8bmLZUs87FxcZk29Gi-e820G32YgIBAOWWnBmVIoGnbIs9yKvC243j5e6m8-Th3Eo9IatXMi-nbYmvGDq~EeOm9JVjRq~w0MPBRBYlU6D8byZhr4dYww__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "d4987458-2061-704f-840d-90061bba7517",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a loving, kind, and deeply empathetic person with a genuine passion for childcare. My priority is to create a safe, fun, and nurturing environment where children can grow and thrive. I am caring and dedicated to every aspect of care, ensuring the well-being and happiness of the little ones.\nMy gentle approach allows me to interact with children with tenderness and understanding, establishing a bond of trust and respect. I am also patient, responsible, and proactive.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-17T14:16:59.261Z",
            "score": 64,
            "opportunityId": "006R700000gAH94IAG",
            "auPairName": "Laura",
            "id": "d4987458-2061-704f-840d-90061bba7517",
            "relaxingInterests": [
                "Journaling",
                "Meditation",
                "Walking"
            ],
            "updatedAt": "2026-04-28T23:33:37.010Z",
            "lastAppLoginDate": "2026-04-28T23:33:37.004Z",
            "spotlightedReason": null,
            "approvedIQHours": 2462.8,
            "profilePictureKey": "protected/d4987458-2061-704f-840d-90061bba7517/f9588a8d-c2fc-4528-a546-05c787bdbe61.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2216002",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2462.8,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2002-12-01",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Drawing",
                "Singing"
            ],
            "sfId": "001R700000msvSJIAY",
            "totalNumberOfChats": 3,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d4987458-2061-704f-840d-90061bba7517/f9588a8d-c2fc-4528-a546-05c787bdbe61.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDk4NzQ1OC0yMDYxLTcwNGYtODQwZC05MDA2MWJiYTc1MTcvZjk1ODhhOGQtYzJmYy00NTI4LWE1NDYtMDVjNzg3YmRiZTYxLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=D4OaRBaliNUIwUQigu3QGsWRs23kKSOkmkgYht0HQva0SzrqpjZvmNRqU2LEmMXGsW8RLOwy2-hUpfvIwS4R8vHQSY0hGiqrbVIwOAKjOMpSdo1xsUYnD6iAqGauM54fFXntQGxMlvwIQjUzF7XDXP8Tb7O2SkxxvnzXQ5d3xR2Rx02r4A2CD5deMGy~oBnBqwt08paBNuT7SOeTlzgMsfX42Vi6QJ0jWl824KSAd529fJoDXNxaTRUz2jUu8VmxB2cWyNfv9pK3jMlJ97p9YDvxOUgrPnrdcONk45nbpnTqiRNHZHiLVn9pQLUMu2LbOo3QRgAY0z-UUBHS3tJ7aA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2026-01-17",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "d49894f8-40e1-7098-18fb-3b3627cd194e",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Alejandra and I will turn 21 on February 22. I am an active, dynamic, responsible, and organized person with a positive energy that reflects in everything I do. I am reliable, detail oriented, and I enjoy keeping spaces clean and structured. I live with an open heart, love sports for the balance they teach, respect animals deeply, and enjoy sharing love, learning, and positive energy with children and everyone around me. with kindness patience, commitment, and a constant desire to gro",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-17T16:00:55.441Z",
            "score": 64,
            "opportunityId": "006R700000MrrvyIAB",
            "auPairName": "Stephany Alejandra",
            "id": "d49894f8-40e1-7098-18fb-3b3627cd194e",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gardening",
                "Journaling"
            ],
            "updatedAt": "2026-04-28T18:58:53.182Z",
            "lastAppLoginDate": "2026-04-28T04:14:23.667Z",
            "spotlightedReason": null,
            "approvedIQHours": 440,
            "profilePictureKey": "protected/d49894f8-40e1-7098-18fb-3b3627cd194e/7bd7f440-fb0d-4968-9e39-640cedf3e3ad.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2111913",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years",
                "All ages"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6311.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2005-02-22",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Badminton",
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Baking",
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000P6U0DIAV",
            "totalNumberOfChats": 26,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d49894f8-40e1-7098-18fb-3b3627cd194e/7bd7f440-fb0d-4968-9e39-640cedf3e3ad.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDk4OTRmOC00MGUxLTcwOTgtMThmYi0zYjM2MjdjZDE5NGUvN2JkN2Y0NDAtZmIwZC00OTY4LTllMzktNjQwY2VkZjNlM2FkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=D~vb00qJbMN-HC45iq~wZ2L5DoT1N7uV9GKUFR4dx88t11jA0ieSuxY7FXK4msfqaqjnGOk8L9s9AFS0r2BhcBaIaOZe1gYwM0a7bjbjtlbmocVtnHFqucm9gIkKwNBaFuC8QrlqPPj-XzzpI1p5aI0Z~qbMbRMy6xXKmwvs0I96AFKoCb8YS5Pn1u0Lr5fIyDZWL9pc7GZ-H7udSB6hNJKG6x36lVisMdYCgd1FvM6lHLfRTa8S~aCYbNv6sGIzTrW-2IXjdilfOuFbU0FWnn6vNWusCuM6jJZAGOiR2Hr5oMvUHepLhlSBmz1P76q370ueilHqrjbdwHmxpHyODQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Creative",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-14",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [],
            "loginId": "d4a84468-b071-70da-6d90-031762161731",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I'm Karen. I live in Cali and I'm a psychologist with a certificate in Early Childhood Education. I'm 22 years old and I enjoy rollerblading. I love cats and I have two of my own. I love working with children and I know how to adapt activities and games to support their learning. People describe me as outgoing, charismatic, affectionate, and kind.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-14T21:27:50.316Z",
            "score": 64,
            "opportunityId": "006R700000fuoAfIAI",
            "auPairName": "Karen Tatiana",
            "id": "d4a84468-b071-70da-6d90-031762161731",
            "relaxingInterests": [
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T22:43:38.413Z",
            "lastAppLoginDate": "2026-04-28T22:43:38.408Z",
            "spotlightedReason": null,
            "approvedIQHours": 1661.76,
            "profilePictureKey": "protected/d4a84468-b071-70da-6d90-031762161731/20b01640-0de0-46cb-86bf-6afe8e2be53c.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2377804",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5801.12,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-04-19",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-11-20",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Gymnastics",
                "Roller skating"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Crafts",
                "Social media"
            ],
            "sfId": "001R700000mbgO8IAI",
            "totalNumberOfChats": 1,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d4a84468-b071-70da-6d90-031762161731/20b01640-0de0-46cb-86bf-6afe8e2be53c.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNGE4NDQ2OC1iMDcxLTcwZGEtNmQ5MC0wMzE3NjIxNjE3MzEvMjBiMDE2NDAtMGRlMC00NmNiLTg2YmYtNmFmZThlMmJlNTNjLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Pnp~CPHBdU8r33L3nDoUKZiJPJVpDBulYMNJyf~u7xLh8u1ZyMiHcGHD6Kv4n9lXpEDM~mZUFPI01rDGeKeCkPYi~6o8If5u9gp~EZZhFQ477-AmB3nlUYIRQQaNx-5cxGRSigBy0w47o5KgnzWlZ5P~hDUs1m3LK5OEVZqz9naED9Yt4zeOj5317zbtKbhZHdC6R~lo7NlK2DMsI2jdflgRWacAM8ghJKu0R74j2Ym8fDJnXWUqva4K3geDlPsIxlqDDxC38S0FlFNYsEPkviK4c3w2O-rIpTsA5hONMWr~2IpsnjivqOHc~m3fxsShD9Gg7lVEAOf6GKbr~0QHYA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-08",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "d4b86468-e021-708b-32c8-058050b7ed01",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a responsible, respectful, and committed person in my work. I consider myself organized, punctual, and dedicated to carrying out my tasks with care and attention. I like to maintain a harmonious environment, collaborate when needed, and continuously learn to improve. I enjoy helping and contributing positively, always with a good attitude and willingness to fulfill the responsibilities assigned to me.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-08T21:24:03.147Z",
            "score": 64,
            "opportunityId": "006R700000evAN1IAM",
            "auPairName": "Heidy",
            "id": "d4b86468-e021-708b-32c8-058050b7ed01",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Journaling",
                "Movies",
                "Puzzles"
            ],
            "updatedAt": "2026-04-28T23:51:02.781Z",
            "lastAppLoginDate": "2026-04-28T23:51:02.777Z",
            "spotlightedReason": null,
            "approvedIQHours": 1040,
            "profilePictureKey": "protected/d4b86468-e021-708b-32c8-058050b7ed01/8f80fd7b-5c94-44c6-8ec3-2425e52b4103.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2369171",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1040,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-02-08",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-10-30",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Drawing",
                "Graphic design",
                "Makeup"
            ],
            "sfId": "001R700000lU7fOIAS",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d4b86468-e021-708b-32c8-058050b7ed01/8f80fd7b-5c94-44c6-8ec3-2425e52b4103.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNGI4NjQ2OC1lMDIxLTcwOGItMzJjOC0wNTgwNTBiN2VkMDEvOGY4MGZkN2ItNWM5NC00NGM2LThlYzMtMjQyNWU1MmI0MTAzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=GLafvEDSLAIgjwft3r2ueaMOtB-6LeM4jN8QAe8cCBJchXtb1tN2iL8GOMFO2dTCTT4HPFOYYE-IhCLutJE7mtgNAH3RgZ3P63wO5AuHUt2d028J1U9KacMUwT7HLoiszZexhXqnNW3UnLbMdFirgiu1MnYhuPXqc5cHhRa2fvdPHXnwdnQAu-LPg9Dm6fkHmz5gJZMIowKR9AMi6RDs7UZQIj~sq~483H8mwL24LsAgamX-lfqxUdEIT~VUoRUUJkZS27SvxF7qWAlNCpWGXpRP1DXSJ-3nqlAQS5vwFMBWWd5Qkzn2C2-dZr5rrPt2F2Rh~0wOPdx61VMKik6G3w__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-10-10",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "e4584458-a071-7099-0c37-ea3d7e8d69d0",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, my name is Catalina. I am 21 years old and I am a Virgo. All my life I lived in the same place and in the same house, I live in a small town in Rio Negro. I live with my parents, my brother Jero and my sister Flor. I have two more sisters who live with their husbands and children. I would define myself as a calm person, my mother always tells me that I am very sweet, calm and sometimes affectionate. I like to show affection to children, especially my nephews. I feel like them need that!",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-10T13:12:54.894Z",
            "score": 64,
            "opportunityId": "006R700000Wagj6IAB",
            "auPairName": "María Catalina",
            "id": "e4584458-a071-7099-0c37-ea3d7e8d69d0",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-26T14:53:27.681Z",
            "lastAppLoginDate": "2026-04-19T20:24:00.335Z",
            "spotlightedReason": null,
            "approvedIQHours": 517.75,
            "profilePictureKey": "protected/e4584458-a071-7099-0c37-ea3d7e8d69d0/5894f348-718f-4acb-ae7b-9569ca8b8f53.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "AR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ARG2268054",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6317.75,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-09-06",
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-12-11",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Gymnastics",
                "Soccer",
                "Swimming",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography",
                "Singing",
                "Social media",
                "Writing"
            ],
            "sfId": "001R700000bg7npIAA",
            "totalNumberOfChats": 48,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/e4584458-a071-7099-0c37-ea3d7e8d69d0/5894f348-718f-4acb-ae7b-9569ca8b8f53.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9lNDU4NDQ1OC1hMDcxLTcwOTktMGMzNy1lYTNkN2U4ZDY5ZDAvNTg5NGYzNDgtNzE4Zi00YWNiLWFlN2ItOTU2OWNhOGI4ZjUzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=iRVK2ib9Kkz9jLGGeOOz5lU-bvwYNhA~8mK~sJ8Aebk0P9iOQAeC87R6RcNPWcf6v8FZTd5vXiBSOvW7J8L5e3vZ~SNSthElUEMKMLXEWpxitSqdKG0shkuzqCENj4TIxxEJvcwzmiiTZRvvcVZB-l9XGhNgp0uAT2wiXtusjnYXLAll4goR1aaPnCtEqOZdnDAVbpFkjAo6D5DA1MVrOq9Z2js2thwkLkh1jT-dxCSDOqSiK9QDuHv4LdG3lnaWaneFKtuv2xjYuy-uZFfA2zJLcVyW1VtQupDCul2naLCQf377zCjjQLeALdLRm-sMm~3~NyvWEhLAb1yLQayCHg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Funny",
                "Organized"
            ],
            "matchingStartDate": "2026-04-14",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "f4284448-3081-70bd-1985-dd943d17b3a8",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello! I am a caring, responsible, and positive person who enjoys spending time with children. I love activities like drawing, reading, playing games, and outdoor walks, which I can share with your kids. Family is very important to me, and I value respect, kindness, and communication. What makes me different is my patience, creativity, and genuine love for helping children learn and feel happy.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-14T14:37:44.702Z",
            "score": 64,
            "opportunityId": "006R700000fdd3WIAQ",
            "auPairName": "Alejandra",
            "id": "f4284448-3081-70bd-1985-dd943d17b3a8",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:05:43.944Z",
            "lastAppLoginDate": "2026-04-29T01:05:43.939Z",
            "spotlightedReason": null,
            "approvedIQHours": 2450,
            "profilePictureKey": "protected/f4284448-3081-70bd-1985-dd943d17b3a8/6e61464a-1f46-45a8-afa9-85b71c2c6255.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2376304",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2450,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-12-20",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Crafts",
                "Drawing",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000mHoXsIAK",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4284448-3081-70bd-1985-dd943d17b3a8/6e61464a-1f46-45a8-afa9-85b71c2c6255.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNDI4NDQ0OC0zMDgxLTcwYmQtMTk4NS1kZDk0M2QxN2IzYTgvNmU2MTQ2NGEtMWY0Ni00NWE4LWFmYTktODViNzFjMmM2MjU1LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=EN~xFBF3Wp2~aFCsJMLTkUvQ~HDdQQz93hKTqo7GA1xJ-tq0icBXfSfdkfV1pzr~jNvBsAMeqp8Rm-2rqNyuZ2Tv-Z~E6qp~AI7Z2-IA22DIkCT5S54osQy0MiNeZXTJJ5t7IQw~gfORtmiwC6bzA0kknbce4OL8Dk7cJqP7IvWo3eavG1gT2mdSaSnzDiCokrSxqYvHmAVtmQGg1X7s3P3kbLNLtl4WfxsSR6cgse3HxgtEzs9h7cj8r3SApe12t1BudanPklJW1aOwFHSr89-VZHQzxRuvLX2dpqp7aOxUFscvw5naCK4DyNuEWgA9Xm~Yr0lORvNY81f6YJuvwg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic"
            ],
            "matchingStartDate": "2026-03-07",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "f4680498-00d1-70a0-1161-8d51496ccb2c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello family, my name is Juliana, I am 20 years old, and I live in the city of Medellin, Colombia. I live with my mom, my sister, and my dog Chanel. I have a degree in comprehensive early childhood care and have extensive experience caring for children from 0 to 6 years old. I am very loving and still have a childlike spirit, so I enjoy playing with children. In my free time, I love to dance, sing, read, and travel, and my favorite food is sushi.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-07T00:01:59.023Z",
            "score": 64,
            "opportunityId": "006R700000Lw53FIAR",
            "auPairName": "Nana",
            "id": "f4680498-00d1-70a0-1161-8d51496ccb2c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming"
            ],
            "updatedAt": "2026-04-28T22:34:05.384Z",
            "lastAppLoginDate": "2026-04-27T12:51:34.342Z",
            "spotlightedReason": null,
            "approvedIQHours": 1446.45,
            "profilePictureKey": "protected/f4680498-00d1-70a0-1161-8d51496ccb2c/fd099ef8-32fd-4d6b-9f73-c8a5028a5f58.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL14432590",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2620.8,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2005-02-08",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Makeup"
            ],
            "sfId": "001R700000F2zTFIAZ",
            "totalNumberOfChats": 34,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4680498-00d1-70a0-1161-8d51496ccb2c/fd099ef8-32fd-4d6b-9f73-c8a5028a5f58.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNDY4MDQ5OC0wMGQxLTcwYTAtMTE2MS04ZDUxNDk2Y2NiMmMvZmQwOTllZjgtMzJmZC00ZDZiLTlmNzMtYzhhNTAyOGE1ZjU4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=YF7TAVfIYWcYvjxWilCHJ2fEuy8PIxm~8Uq9ZCNNy5zsHQKeRSHxBsJVUt5O5gxG26Y6rrT6FR7CMKs8HnD6dU3Qa1YiGBiv1avLMw2oSL0c7jlQF2cFRO7LFsbi6QV1eHrYBI0Q6T0e3Aw5I-1vsZt7ACkf0LRPI06Mumt3oPu7jmigMO5TK8rMFWZvdLzhSHUpAHjQOocE7WunhY~EhHuUnDBwuQIE0nGNLMMqTM-mpLVxf8mNYOSvw5-zfSm-KqCOKeVUWnv7K~yy~DmwkCgMrS2TG7JSvdf2dOtwZk1efFF3xC8vtY2e58YwmFSFIXCEIDjYbD4eL-PqxF4EBw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-10-06",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "f4785428-8041-7023-1049-8c9bbe959aa3",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "¡Hello!. My name is Nicoll, I’m 23 years old and I’m from Bogotá, Colombia. I live with my parents and my three siblings, and we have two dogs. I recently graduated in Business Administration. \nI consider myself trustworthy, adventurous, responsible, and creative. I enjoy reading, writing, hiking, spending time in nature, going to the movies or the theater, and playing tennis, my favorite sport.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-06T20:54:59.066Z",
            "score": 64,
            "opportunityId": "006R700000WNXH0IAP",
            "auPairName": "Nicoll Valentina",
            "id": "f4785428-8041-7023-1049-8c9bbe959aa3",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gardening",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:18:05.492Z",
            "lastAppLoginDate": "2026-04-29T00:18:05.487Z",
            "spotlightedReason": null,
            "approvedIQHours": 344.3,
            "profilePictureKey": "protected/f4785428-8041-7023-1049-8c9bbe959aa3/3d6d4b10-a3ed-47ce-a2c5-2a746381eb18.png",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2266022",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1489.3,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-11",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-08-17",
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Badminton",
                "Baseball",
                "Basketball",
                "Cheerleading",
                "Cricket",
                "Cycling",
                "Dancing",
                "Fishing",
                "Golf",
                "Gymnastics",
                "Handball",
                "Hiking",
                "Horseback riding",
                "Roller skating",
                "Rugby",
                "Running",
                "Sailing",
                "Skiing",
                "Soccer",
                "Softball",
                "Squash",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Social media",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000bQeFrIAK",
            "totalNumberOfChats": 31,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4785428-8041-7023-1049-8c9bbe959aa3/3d6d4b10-a3ed-47ce-a2c5-2a746381eb18.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNDc4NTQyOC04MDQxLTcwMjMtMTA0OS04YzliYmU5NTlhYTMvM2Q2ZDRiMTAtYTNlZC00N2NlLWEyYzUtMmE3NDYzODFlYjE4LnBuZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=KF2GPdavxayVDLMIksnsiAvwgnAo~mmtYrokJKiYsPVR31KGq4sRS-4uJSr79NvdIqnZSPWMqIVPyEqRgMR3ryExd19a9CyBrrOMlLt2htqOKmNJDyXVprJCU4iTRuc~Uq6xr1~MW~C72-~4xINiD13Bkt9~qVqiy7SIO8IzLcxe-1e6Gf2HBbkCakKNpEURevl2AJV2pLU~sOFhsxMoPGUJHfs46Qb3zeUT~L5VETb7bJqlAQ27iZMy5vUGqq1MPt4hF~qyuR6YwtU6bwBkNHoaAoRNDccHYmWExCQPVuVfsX8fMgIDboMhZ4z8qYbTOck1BPRrwhCTH2bToTeZZg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Creative",
                "Empathetic",
                "Funny",
                "Proactive"
            ],
            "matchingStartDate": "2026-04-15",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "f48854d8-60c1-7009-4d48-dc214f073633",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello dear Host Family! My name is Laura Galvis. I am a very family-oriented person, empathetic and friendly. I really enjoy talking with people and listening to them. I love spending time with children and creating dynamic activities that allow them to learn while having fun. I believe that creativity and interaction help children feel happy and confident. I also enjoy sharing special moments with my family and friends, such as traveling, discovering new places and learning new things.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-15T17:57:44.144Z",
            "score": 64,
            "opportunityId": "006R700000fyuNuIAI",
            "auPairName": "Laura",
            "id": "f48854d8-60c1-7009-4d48-dc214f073633",
            "relaxingInterests": [
                "Camping",
                "Movies",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:07:05.237Z",
            "lastAppLoginDate": "2026-04-29T01:07:05.212Z",
            "spotlightedReason": null,
            "approvedIQHours": 822.8,
            "profilePictureKey": "protected/f48854d8-60c1-7009-4d48-dc214f073633/6a2060fe-a9a9-4022-ac59-ff7be2da1bef.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2379585",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1862.05,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-12-13",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Graphic design",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000mgT0LIAU",
            "totalNumberOfChats": 7,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f48854d8-60c1-7009-4d48-dc214f073633/6a2060fe-a9a9-4022-ac59-ff7be2da1bef.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNDg4NTRkOC02MGMxLTcwMDktNGQ0OC1kYzIxNGYwNzM2MzMvNmEyMDYwZmUtYTlhOS00MDIyLWFjNTktZmY3YmUyZGExYmVmLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=BxfkjruJZ~nNBCHhVtvylHCkqeaeRpvG6NUDlPbAYET8z7SBfOXNcrcxhxHP4iGoxQgjHrGpvouiJS9rOdqHln-l6Y5MVuGtXws2YRMwKBHc88gu0hPTSFpWlUo9B72LXL476z~csCbSoe~6tnVUII90iaCWrXE8iFhF67aSxnszF2MxtsMGj8hueb0ypfUY7IT3B4Uj4yTZGGcmuPJC1ElGQrXE-neA7BOxFJUirhFAUSYQpagA7dLDXGsFgFlZzlUl3YzK9vgLCHPP2qsj9aLT89jbrtU0V2z3P29PBmt3AHzJYsv9SHWChkzJYipOeOsHrHiTR6cEI9pV7qnHKw__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "f4a86488-4081-700c-e28f-77b5f177b854",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Im a stundent of international business and i love to learning new lenguages, cultures and of i love to visit new places. I am a very calm person, that enjoy to do artistic activities like for example, paint, draw, etc. I like to go to the cinema, coffes , the beach, some parks, to the mall. And i like to do morning walkings with my dog. Recently I live in Chile during 6 months because I do an exchange, so I have experience leaving alone. With the kids I have experience taking care of my nephews",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T18:43:52.646Z",
            "score": 64,
            "opportunityId": "006R700000gpRyrIAE",
            "auPairName": "Mariana",
            "id": "f4a86488-4081-700c-e28f-77b5f177b854",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Movies",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T18:43:52.646Z",
            "lastAppLoginDate": "2026-04-24T16:10:29.000Z",
            "spotlightedReason": null,
            "approvedIQHours": 281.04,
            "profilePictureKey": "protected/f4a86488-4081-700c-e28f-77b5f177b854/9f8cb35e-a091-4e5d-b9a6-5e6345d34408.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2145640",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2914.32,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "Chinese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-07-14",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Soccer",
                "Swimming",
                "Table tennis",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000PToeAIAT",
            "totalNumberOfChats": 18,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4a86488-4081-700c-e28f-77b5f177b854/9f8cb35e-a091-4e5d-b9a6-5e6345d34408.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNGE4NjQ4OC00MDgxLTcwMGMtZTI4Zi03N2I1ZjE3N2I4NTQvOWY4Y2IzNWUtYTA5MS00ZTVkLWI5YTYtNWU2MzQ1ZDM0NDA4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gPSN-kC--eyioGedG2HF-jGjieR0i5RDyT9ZvlBqFdyW3hkCQqlaXq4iTsBaM9zQmJU989Sa9KD~LEomTUyA1BobADRcRlg0nGlytVmCNgVeTbEqUnkwkPXt~C~hPcwJWeXO-VZuWoKohMznRzLBUtPDb8~IuFM-i1h5FjeTiHXTBmJaCF4xE0gD~iDAXVp9VzpKrDIly-uQojbknqrcof~Ki2L-B-M1KRX4ODUBjFDEpIsnSbx7eqFUnqeL1QUT8nxwhnN4CI8CQhtflONb-bPp-sguCUneSfa6mASKMW~2IIA~7NdrdShxN5UNJEQwjgvMLDUue9Sk40deHMGqEQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Flexible",
                "Funny",
                "Organized"
            ],
            "matchingStartDate": "2026-03-18",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "f4c87458-20a1-70e5-c9cb-f753f3ae3efe",
            "okToLiveWithPets": false,
            "aboutSelfAndInterests": "Dear Host Family,\nMy name is Lenna , I am 21 years old and I come from France. I have my BAFA and over 3 years of experience with children in camps and activity centers. I also help care for my 3-year-old sister. I am responsible, patient, and creative, and I love organizing fun and educational activities. I would be happy to join your family and share my culture with you.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-18T12:01:42.693Z",
            "score": 64,
            "opportunityId": "006R700000fDJoRIAW",
            "auPairName": "Lenna",
            "id": "f4c87458-20a1-70e5-c9cb-f753f3ae3efe",
            "relaxingInterests": [
                "Board games",
                "Movies"
            ],
            "updatedAt": "2026-04-28T20:56:16.032Z",
            "lastAppLoginDate": "2026-04-28T20:55:56.622Z",
            "spotlightedReason": null,
            "approvedIQHours": 898.28,
            "profilePictureKey": "protected/f4c87458-20a1-70e5-c9cb-f753f3ae3efe/056534d1-0415-4411-bdd1-bdf2d6fdaa03.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "FR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "FRA2369807",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2671.44,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "French"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-08-28",
            "monthsLeft": 0,
            "preferredPets": [],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-10-30",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Baseball",
                "Basketball",
                "Cheerleading",
                "Gymnastics",
                "Roller skating",
                "Skiing",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Drawing",
                "Makeup",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000lopxAIAQ",
            "totalNumberOfChats": 14,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4c87458-20a1-70e5-c9cb-f753f3ae3efe/056534d1-0415-4411-bdd1-bdf2d6fdaa03.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNGM4NzQ1OC0yMGExLTcwZTUtYzljYi1mNzUzZjNhZTNlZmUvMDU2NTM0ZDEtMDQxNS00NDExLWJkZDEtYmRmMmQ2ZmRhYTAzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=GLGWhS~Sd0C5PgQTpAHgAGo7BDzJ-0MvEcjwp6AoumYHETBBZ7~Q~fV7MdkKbinLALFrG153N9M~v~1xufC0J8zYhEOA8iz81PcBS3RRewhNooPr69UaVrmPBdwkTpcxFkXEv9rmVtHsOdCSDxZ-maf4LUubMro8TrlANvWhVkM9LYEk6RVUKBQAcSHbXKMLEUT8Krsrep8qO4Nv~tCg4dDtPI5AyU0KTvdXL4N86MfhwHDj4mGR3O7ytroB1JNcvlpusFWCRXudbn0iZ~DSUHqyYtoXR30Wkoy9Tfa1zt5eiv9R10odLub1DvjjNaN8l9rqpS-~yqcCAS-Zko4nyQ__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Independent",
                "Warm"
            ],
            "matchingStartDate": "2026-03-20",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "f4c8d498-f0c1-70d6-0b14-60a4688e72d2",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Melissa has always been told that her smile lights up any room. She lives life to the full and isn’t afraid to laugh out loud or cry when she needs to. She is kind, empathetic, and intelligent, though sometimes a bit absent-minded. Meli follows her heart, is brave, and works hard to achieve her goals. She loves art, enjoys life, and has always had a special connection with children and animals. Nice to meet you, I’m Meli 🤍",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-20T23:49:17.693Z",
            "score": 64,
            "opportunityId": "006R700000fNs6YIAS",
            "auPairName": "Meli",
            "id": "f4c8d498-f0c1-70d6-0b14-60a4688e72d2",
            "relaxingInterests": [
                "Journaling",
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:01:08.712Z",
            "lastAppLoginDate": "2026-04-29T01:01:08.706Z",
            "spotlightedReason": null,
            "approvedIQHours": 6803.5,
            "profilePictureKey": "protected/f4c8d498-f0c1-70d6-0b14-60a4688e72d2/03612afd-312b-4734-a811-8d95a445cd74.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL13755282",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7153.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-05-12",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Roller skating",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Graphic design",
                "Photography",
                "Social media",
                "Writing"
            ],
            "sfId": "001R700000EHNtNIAX",
            "totalNumberOfChats": 16,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4c8d498-f0c1-70d6-0b14-60a4688e72d2/03612afd-312b-4734-a811-8d95a445cd74.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNGM4ZDQ5OC1mMGMxLTcwZDYtMGIxNC02MGE0Njg4ZTcyZDIvMDM2MTJhZmQtMzEyYi00NzM0LWE4MTEtOGQ5NWE0NDVjZDc0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=B30LzmvWXUV4V7HxGNrKLD-gJDxGGVlDm17DQLoenGFDLq691aH8Lm-ZHPUTDUuZOXB9Ex5NSfti~XcIPJRdmIS0qJNzt-ujt4nzRz3ovSPfOcHKwcCACkjoB9hhTwwo1GxfQgX0rzAHdQpH4EjkB-UiWZBlZYIK9rk5loAFO1kUy6kH92ZhKxbIpKlbxenZkj8laYRRSEfOClc6xIqu84GhO5B9EFdtw~Ysy0ByEU~B4b1F6uORJftP1IOWnMnPackP34Yd5DC~zqRj9SlHr-o0bjPopYyoxzOn-RVrzghU3~gGYhR96gVEXdW4X7oh6~agqYfh9Bjkay9nzVxxsQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "04b8d4c8-10e1-7049-c992-8a0363a628d8",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Milagros. I’m from Argentina.I’m caring,responsible and positive person who truly enjoys spending time with children. I have experience with kids of different ages, especially my nephews,helping with daily rountines,playing and organizing fun activities. I enjoy going to the park, doing crafts,reading books and creating a safe and happy environment for kids. In my free time I like spending time with my family,going to the gym,walking around places near my home with my friends",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-14T18:53:14.050Z",
            "score": 0,
            "opportunityId": "006R700000E4tqaIAB",
            "auPairName": "Mili",
            "id": "04b8d4c8-10e1-7049-c992-8a0363a628d8",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gardening",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T00:55:08.116Z",
            "lastAppLoginDate": "2026-04-29T00:55:08.112Z",
            "spotlightedReason": null,
            "approvedIQHours": 640,
            "profilePictureKey": "protected/04b8d4c8-10e1-7049-c992-8a0363a628d8/088cc40d-f0a3-4cd4-aad3-2842e94dbac5.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "AR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ARG14239429",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2440,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-03-26",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000EHsBcIAL",
            "totalNumberOfChats": 26,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/04b8d4c8-10e1-7049-c992-8a0363a628d8/088cc40d-f0a3-4cd4-aad3-2842e94dbac5.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNGI4ZDRjOC0xMGUxLTcwNDktYzk5Mi04YTAzNjNhNjI4ZDgvMDg4Y2M0MGQtZjBhMy00Y2Q0LWFhZDMtMjg0MmU5NGRiYWM1LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=WF1HX8PIb5apAsoKV1keztyoUrEo~CoMidV1EDz7R1ZACtw3RCJg5s9Ik7YueWrD36Vs-7Tjpz90wU6kcxGemHSD4IQSVGrZq16S~nPX-A73EW6yQA4bFa6ihsLXAuEAPZeU2ysN~jXK8veZnZ62dXyEBtl1yNgW4kl79vBy3KanWMuACKkkunw6DM81osMAKOnunx9E0D3B8GUeLF0tqBm~Q6rPK29M~jcyHhPAx0f8VmSwrZD15E-3GYO00fi2X-YVeDyJNHcmUBLvhXBrLFRtTh0xeIS-RvECb8a2BQlmBFmnWVARlKdJyBLRNtTlX8dIMMYYtdjVKUFj3dhtWw__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Laid-back",
                "Organized",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-10-23",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "34286448-c0e1-70d9-0fe3-dbae494f488c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a responsible, empathetic, and respectful person. Many people describe me as kind, with a calm and warm personality. I am characterized by doing things with dedication and commitment, always aiming to give my best. I value details and try to act with honesty and respect.\nI enjoy spending time with family, discovering new places, dancing, and having experiences that help me grow.\nI am looking for a loving, kind, and respectful family with whom I can build a positive experience for both side.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2025-10-29T21:56:13.025Z",
            "score": 0,
            "opportunityId": "006R700000WZAoTIAX",
            "auPairName": "Mapis",
            "id": "34286448-c0e1-70d9-0fe3-dbae494f488c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Movies",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-28T21:31:49.733Z",
            "lastAppLoginDate": "2026-04-28T21:31:49.729Z",
            "spotlightedReason": null,
            "approvedIQHours": 1500,
            "profilePictureKey": "protected/34286448-c0e1-70d9-0fe3-dbae494f488c/bba8e6a7-5563-4d00-a5ad-7aad3be383a2.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2268173",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1734,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-10-20",
            "preferredPets": [
                "Cats",
                "Dogs",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Dancing",
                "Roller skating",
                "Soccer",
                "Tennis"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Crafts",
                "Drawing",
                "Makeup",
                "Photography",
                "Singing",
                "Social media"
            ],
            "sfId": "001R700000beUy9IAE",
            "totalNumberOfChats": 57,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34286448-c0e1-70d9-0fe3-dbae494f488c/bba8e6a7-5563-4d00-a5ad-7aad3be383a2.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNDI4NjQ0OC1jMGUxLTcwZDktMGZlMy1kYmFlNDk0ZjQ4OGMvYmJhOGU2YTctNTU2My00ZDAwLWE1YWQtN2FhZDNiZTM4M2EyLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=YLbDloq3CgUcOT2hHEJn6Wtfw1qO5t945z8xWc48nsw9JDOiOET1JbJEquR-b57ykjgAHq8E9lCoKCfrsSq8gR-6NnTks4fCPKL-~J1JIDXQ48Xo2xHlmmSCM5jxDuqdyft~KMRDO-xlZiL2ZjZaHlzDP4MOUVgVdqZNVJv8d-WkXSBP0b3Wu1is3XEVG-Q2f5N4xrHhZJx8Q8YHtnFWPFqXYjxzN-jU8FqRKTIXyWJjKj9rSn0mn-It8FDtkQJU8dbzFLW4lCoi9ayIS91wB-1Uqt3PVjWlPrZVI57BG0DHpifa3n~XxAwi1rXNfNXJwkpE7Svl-6PEO7afTrnW4g__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2025-12-20",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "34d86488-60d1-705c-6a1d-e20fb5b3602a",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, nice to meet you. My name is Dayana and I am 20 years old. I am a young woman very passionate about serving humanity and always helping people who need me. I adore children and being able to share my knowledge with them for their future. I love the idea of educating children for a better future for our planet and sharing my knowledge so they can grow up to be good people. I am a very cheerful person who has become the best friend of every child I've spent time with, and they always adore",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-20T20:32:38.314Z",
            "score": 0,
            "opportunityId": "006R700000Ymv8TIAR",
            "auPairName": "Darly Dayana",
            "id": "34d86488-60d1-705c-6a1d-e20fb5b3602a",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Gardening"
            ],
            "updatedAt": "2026-04-28T10:00:14.907Z",
            "lastAppLoginDate": "2026-02-25T04:12:36.634Z",
            "spotlightedReason": null,
            "approvedIQHours": 4297.36,
            "profilePictureKey": "protected/34d86488-60d1-705c-6a1d-e20fb5b3602a/a30fe258-bde2-49e3-80d5-d2fd4749f48c.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2294013",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 12226.76,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2005-04-12",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Vegetarian"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Graphic design"
            ],
            "sfId": "001R700000eOoXhIAK",
            "totalNumberOfChats": 26,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34d86488-60d1-705c-6a1d-e20fb5b3602a/a30fe258-bde2-49e3-80d5-d2fd4749f48c.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGQ4NjQ4OC02MGQxLTcwNWMtNmExZC1lMjBmYjViMzYwMmEvYTMwZmUyNTgtYmRlMi00OWUzLTgwZDUtZDJmZDQ3NDlmNDhjLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=ISX4KWLg7xZPtWAxNl25uYNAbBT~6fg~f5bT3RGb9b5KbQdk7M0tCqL5fRry73cBT6CGn1BEUdn7COOmg8EKO8TZmDnj~yk~d3zeOBryHyKEQkcQQZu-ZigOdUXEdqFaEF63H1EKxzYuypCg3lYhwYEzJZNwYpjefUg6GMD0mpiCNVh68Vzuzoms63m1J6zII8hlWLZNxqF7yXhGBA9y3J1CPO7~ILsGk0BQgYeGqe7xz02GrnO5DsS3wuJmSzrRvGzBDDP469FjXPPgv~7IvEddvEusswBOHNy8GU4FyUgP7kxddTXN349de8easOIo7pEa8x8AEdcFNLOgE387Mw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Creative",
                "Driven",
                "Empathetic",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Proactive"
            ],
            "matchingStartDate": "2026-03-13",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "44d8b478-a021-7049-bab3-89720a333783",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Melissa, I'm 23 years old, and I'm from São Paulo. I am a Psychology student working in fashion, passionate about art and child development. I consider myself very independent and respectful. In my free time, I love museums, cafes, and crafts. When I'm with my younger brothers, we enjoy the pool, zoos, and cycling. I have a calm and reserved personality, but I am very friendly and love making new friends.  I truly believe that good communication is the key to resolving anything. 🩷🎭💫🎨",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-27T15:48:18.071Z",
            "score": 0,
            "opportunityId": "006R700000XZKaLIAX",
            "auPairName": "Melissa",
            "id": "44d8b478-a021-7049-bab3-89720a333783",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Puzzles"
            ],
            "updatedAt": "2026-04-28T20:27:28.765Z",
            "lastAppLoginDate": "2026-04-28T20:27:28.761Z",
            "spotlightedReason": null,
            "approvedIQHours": 929.26,
            "profilePictureKey": "protected/44d8b478-a021-7049-bab3-89720a333783/d8b8ab76-da84-4f31-8a60-c58b9594e06a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2280089",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 929.26,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-10-19",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Martial arts"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography",
                "Theater"
            ],
            "sfId": "001R700000csojXIAQ",
            "totalNumberOfChats": 28,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": true,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44d8b478-a021-7049-bab3-89720a333783/d8b8ab76-da84-4f31-8a60-c58b9594e06a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NGQ4YjQ3OC1hMDIxLTcwNDktYmFiMy04OTcyMGEzMzM3ODMvZDhiOGFiNzYtZGE4NC00ZjMxLThhNjAtYzU4Yjk1OTRlMDZhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=UtMIGlkBXiENZZ4L~4hwuOAksRywBLQZSX86J782ppXji~xIqylivC5gUzmportzkq6d4kv0TlNSkhvbIom34Uype6S~LYkUQ0kndgPR3XKo9N1T6kwGbaMp3K02XTzPB9uL6QoKBpjMqGkZpqjLFRITHXoWnb6yFyPwRVsglomvMc2KPw9sH5dqzMoPwuv4Z5K4Q3TysTfArWg9Zqi6uyy8H89Q~bR8GGc9PKRA9TkQpPIPtFObQL4YZ85i604jvg3fihZ~XyeYxU7BCM2jElm7it0J-VFuGc9KPt4VWeszvFWV411FD8xESe98Ycsq1fGMLIVmTfr91iMNgeA5ig__"
        },
        {
            "personalityTraits": [
                "Active",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2025-06-11",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "54587468-8011-7015-51cb-137dfc856468",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, dear host family!\nMy name is Laysla, I’m 21 years old and I’m from Brazil. I’m currently studying Pedagogy because I’ve always been passionate about children’s development and education.\nI consider myself a calm, responsible and caring person. I love creating a safe, affectionate and fun environment for children. I also enjoy music, movies, cooking and outdoor activities.\nBecoming an au pair is an important step for me, not only to care for children, but also to grow personally.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2025-09-16T22:17:21.473Z",
            "score": 0,
            "opportunityId": "006R700000LdQeUIAV",
            "auPairName": "Laysla",
            "id": "54587468-8011-7015-51cb-137dfc856468",
            "relaxingInterests": [
                "Board games",
                "Gaming",
                "Journaling"
            ],
            "updatedAt": "2026-04-28T15:46:25.892Z",
            "lastAppLoginDate": "2026-04-28T15:46:25.886Z",
            "spotlightedReason": null,
            "approvedIQHours": 773.55,
            "profilePictureKey": "protected/54587468-8011-7015-51cb-137dfc856468/ed35d19a-2b1f-4943-a5bd-916c49cfb615.png",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA14174272",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1116.35,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2005-03-02",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-11-20",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Cooking",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000EDrKrIAL",
            "totalNumberOfChats": 32,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/54587468-8011-7015-51cb-137dfc856468/ed35d19a-2b1f-4943-a5bd-916c49cfb615.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDU4NzQ2OC04MDExLTcwMTUtNTFjYi0xMzdkZmM4NTY0NjgvZWQzNWQxOWEtMmIxZi00OTQzLWE1YmQtOTE2YzQ5Y2ZiNjE1LnBuZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Ya1SRmwn8cZK0A0Q-DWc~o3yO3wPcZkNycxYjBHddROAB4OO4wjyBDgUJfi7YFwB91PUOrE9PeT7uWAsUCFNHE8n~CSlUr9XEP2QyQjyEwJSX8pzBuj6f3bL2YH5FXOz7Y4Fgs7h~ysaUpgfaJjkeUDh1-YZRZYuCItNVfPxaiRVpA6SQ47GVueOFCPbjEBpnI4PEitZzfSPQb45xZxrDjPzTe9zBksWpAsNVYR60RJ0u7qV3garpxhj6XKG7b3a2IZO7Bsy209UAhUKmWoatoGJjZ2o-7mbvTfxyeUvgkN-ZgfUvikeCjQuBwS44SMxGJ6p5l6T6WVe-ici6PaELg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-01-23",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [],
            "loginId": "742834c8-a0c1-70b5-e3c4-bfb846d6a720",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Vanessa, I am 23 years old and I am from Medellín, Colombia. I am the oldest of six siblings, so caring for children has always come naturally to me. From a young age, I have helped take care of my brothers, cousins, and nephews, supporting them with daily routines such as bathing, preparing meals, and keeping their spaces clean and organized.\nGrowing up as the oldest has taught me to be responsible, patient, and attentive to children's needs. I truly enjoy spending time with kids,",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-06T14:39:49.552Z",
            "score": 0,
            "opportunityId": "006R700000YgPmPIAV",
            "auPairName": "Vane",
            "id": "742834c8-a0c1-70b5-e3c4-bfb846d6a720",
            "relaxingInterests": [
                "Card games",
                "Gardening",
                "Journaling"
            ],
            "updatedAt": "2026-04-29T01:19:29.842Z",
            "lastAppLoginDate": "2026-04-29T01:19:29.837Z",
            "spotlightedReason": null,
            "approvedIQHours": 1953.5,
            "profilePictureKey": "protected/742834c8-a0c1-70b5-e3c4-bfb846d6a720/bd76c7fe-9503-47d6-82e2-fae02db514e7.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2289323",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 10180.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "Other",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-03-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Baseball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup"
            ],
            "sfId": "001R700000eH2ZRIA0",
            "totalNumberOfChats": 27,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/742834c8-a0c1-70b5-e3c4-bfb846d6a720/bd76c7fe-9503-47d6-82e2-fae02db514e7.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NDI4MzRjOC1hMGMxLTcwYjUtZTNjNC1iZmI4NDZkNmE3MjAvYmQ3NmM3ZmUtOTUwMy00N2Q2LTgyZTItZmFlMDJkYjUxNGU3LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=YIx4LcP9GZHzXBDMDVKeMAlBYxEk-l1AgF75ALIzxQnU997e9QNl~fpw~VTHg01OMLP6sZh1F~7YbG3MYApYls68yDDtFs7TGwDMnNHexYAL~KRxnoD6UWIdPJYEsYEbX4xnmiuX~9nd4xQwOXuqk5FA57PiRavDG2C9gPmKB6sZaH53v4qYHq2scvPHiWbOB8WZe3tdEWfsC0tfgsS6rWr8xMMcA3eOWUqGiVwUXZVfTfJXbKX8eKkMr4~6-Dj322m6zRAXBjoja6nDIf8GI53Gpgmp1E~ZlEWy9hBdrvdrAq7cVU7m7IhN1ALx2M8xL7ZteyTHgAAR9YRwB1BhnA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Empathetic",
                "Funny",
                "Independent",
                "Organized",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-06-05",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "84c88458-5071-7060-550f-9a87d6618d65",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I’m Maria (Denise), 26, from Italy. I’ve been living in Australia for 1 year. I love traveling and cooking, especially baking desserts for my family and friends. I’m passionate about nature, especially the sea, and enjoy relaxing at the beach. I speak Italian, Spanish, and am working on my English. I’m a respectful, tidy and responsible person. I enjoy sharing my Italian culture and language with children, and I’d love to learn about your traditions and become part of your family.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-03T17:42:08.397Z",
            "score": 0,
            "opportunityId": "006R700000E0q3BIAR",
            "auPairName": "Denise",
            "id": "84c88458-5071-7060-550f-9a87d6618d65",
            "relaxingInterests": [
                "Camping",
                "Movies",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:06:10.659Z",
            "lastAppLoginDate": "2026-04-27T19:41:13.222Z",
            "spotlightedReason": null,
            "approvedIQHours": 1050,
            "profilePictureKey": "protected/84c88458-5071-7060-550f-9a87d6618d65/936ed4b9-9b69-4e8c-99db-f8233a1e8688.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "ITA13697225",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years",
                "All ages"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3144.8,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Italian",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "4+ children"
            ],
            "dateOfBirth": "1999-08-24",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Atheist",
            "statePreference": null,
            "latestTravelDate": "2026-08-21",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Musical instruments",
                "Photography",
                "Theater"
            ],
            "sfId": "001R700000EMoeaIAD",
            "totalNumberOfChats": 44,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84c88458-5071-7060-550f-9a87d6618d65/936ed4b9-9b69-4e8c-99db-f8233a1e8688.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NGM4ODQ1OC01MDcxLTcwNjAtNTUwZi05YTg3ZDY2MThkNjUvOTM2ZWQ0YjktOWI2OS00ZThjLTk5ZGItZjgyMzNhMWU4Njg4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=S0Te14kC7Zaqk~dLQSZ4dD90cMJ5EJAxP5vOkJWs~CU0JcCkktigXQXTB1Z27-tZvMDfIioZWQSKKHSm1qmsuWooTHvtAFH5uzTktGQ~LRVOdjDiXwGQ~PNcBcSSLS7ievzZYP2WG1Fvy69W3EDagd6UVfxFgVFGY4Heyxel~ziwiXaXipdBGEsllE6SYTLcgwNBpHm691ID~b-ORD8f8B3dW0cGAUn6t1zZnGDgXLzD~FwjiL4UX6T~jmznRpXFzvnNzQWqH6VLXXZgyeekO9YOYzOb4O7hNpPwo5hyxbOeTsgz8Q6dH5NxDN3TtFDupbV8RF9EOpcL0uKf2cI2Bg__"
        },
        {
            "personalityTraits": [
                "Assertive",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Organized",
                "Warm"
            ],
            "matchingStartDate": "2025-11-07",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "a4c87428-7041-707d-321b-31e16ed5b255",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I'm Jojhana and I'm 24 years old. I'm from Colombia 🇨🇴 I’m a graduate in Finance and International Trade. I love dancing and I like to watch series. I'm positive person who enjoys taking on new challenges. I like spending time with my family and friends. I'm a responsible, patient, kind, organized, empathetic, a caring person. My friends say I'm a great leader! I have 2 siblings and I love Christmas. I really enjoy spending time with kids 'cause they are creative, funny and full of energy🤗",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-12T21:13:14.962Z",
            "score": 0,
            "opportunityId": "006R700000WiFoyIAF",
            "auPairName": "Jojhana",
            "id": "a4c87428-7041-707d-321b-31e16ed5b255",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Puzzles",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:05:17.460Z",
            "lastAppLoginDate": "2026-04-29T01:04:01.896Z",
            "spotlightedReason": null,
            "approvedIQHours": 4500,
            "profilePictureKey": "protected/a4c87428-7041-707d-321b-31e16ed5b255/1bc58bb2-95b5-454e-910b-4f3d2284743a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2162719",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 9500,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Korean",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-12-27",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Dancing",
                "Running",
                "Soccer",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Makeup",
                "Social media"
            ],
            "sfId": "001R700000bp47YIAQ",
            "totalNumberOfChats": 48,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a4c87428-7041-707d-321b-31e16ed5b255/1bc58bb2-95b5-454e-910b-4f3d2284743a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNGM4NzQyOC03MDQxLTcwN2QtMzIxYi0zMWUxNmVkNWIyNTUvMWJjNThiYjItOTViNS00NTRlLTkxMGItNGYzZDIyODQ3NDNhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=CVpkKlfx1CGlXgYuA6t4jL1i3kZhr~fEWwOOBmLeFOBzKbYCMV9kgyaGW9GY~-s-V~jVPYOwRrmq4HnEp8QdHMli3mIqmEld4Ljvj9A28xdkbqR~L-FTFFc~4wB3IqmCj53aPvQxg0YR9UHPQf6HAbLvRxL~oAx3VIBLs-xEjUhpugQpJGrrOtsXEOiQtUP7Ytpk7BzQgz6tJ5WzlLVA5KZF09mhQbkjpVAjWDEFCGoXuxJxgV9RBxKhr7Ik5kUyttnO4Bv6AEKPhFqe7o~cmkiWgGsvmGjup1T2tjzJy~9sap8mhZacakSznEvFbPfRrHHiExON5WkFmbwemWgpRQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2025-10-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "c4585468-1051-704f-11a6-506a58052ff2",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, I'm a 21-year-old girl with a clear life plan and a strong attitude and motivation to spend time with a host family, doing a good job while also improving my conversational English. With the host children, I can develop recreational activities and crafts, teach them Spanish, which is my language, and support them in their academic pursuits.For example, I love swimming in the pool, making paper boats, playing soccer, tennis",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-21T21:26:38.710Z",
            "score": 0,
            "opportunityId": "006R700000OhalaIAB",
            "auPairName": "Gabriela",
            "id": "c4585468-1051-704f-11a6-506a58052ff2",
            "relaxingInterests": [
                "Board games",
                "Camping"
            ],
            "updatedAt": "2026-04-28T23:43:26.684Z",
            "lastAppLoginDate": "2026-04-28T23:43:26.680Z",
            "spotlightedReason": null,
            "approvedIQHours": 2453.5,
            "profilePictureKey": "protected/c4585468-1051-704f-11a6-506a58052ff2/05899343-7034-46c6-871e-a02fd3b0d7eb.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2166022",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2453.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-07-31",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Baseball",
                "Cycling",
                "Hiking",
                "Roller skating",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Drawing"
            ],
            "sfId": "001R700000RTozbIAD",
            "totalNumberOfChats": 12,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c4585468-1051-704f-11a6-506a58052ff2/05899343-7034-46c6-871e-a02fd3b0d7eb.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDU4NTQ2OC0xMDUxLTcwNGYtMTFhNi01MDZhNTgwNTJmZjIvMDU4OTkzNDMtNzAzNC00NmM2LTg3MWUtYTAyZmQzYjBkN2ViLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=YtbX7U3VbLeQAzvIM76PoD7xJjKuDMQuyGALrBN8Dg01niLQYp22XW0UW1fGlJdPJDOuyVNH9zdJ2P0Q2eo6jCMeCQKYH4FAUvSh-ECltGE693LojeKY-ALusRQI5PznNkt8ULg1chzQTZ6VjlOdIjujqRryUGbXNtbVnY4QLWrlgYziOuvOO~v1V1GdzfadExEQnbdIwl7yb1aZFjkRXO0zxMgrh4VWCQ7tvnCSgptjT8XXTDddoy-DqjvECzPzo9ckRbrAPMJnMuPa7UHZkQYVfapWfKAWq3IdW6Q5bjaGenHAiMZxrykoLmtpzdX4~ukZ~XZkdJ7Gqo4a3xe1LQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Independent",
                "Organized"
            ],
            "matchingStartDate": "2025-09-12",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "c4d88448-9011-706e-c47b-1a100aab79d5",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Kateryn, I'm engineer, I like listen to music, lay board games or activities in the nature. the movies I prefer cartons movies, and science fiction and doesn't like horror movies but I can watch it , My family es the most important for me, I love pets. I enjoy and love dance, my skincare is important for relaxing for me. I'm extrovert and talkative.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-11T15:47:21.708Z",
            "score": 0,
            "opportunityId": "006R700000VAsuvIAD",
            "auPairName": "Kateryn Daniela",
            "id": "c4d88448-9011-706e-c47b-1a100aab79d5",
            "relaxingInterests": [
                "Board games",
                "Gardening",
                "Movies",
                "Puzzles"
            ],
            "updatedAt": "2026-04-28T20:40:54.538Z",
            "lastAppLoginDate": "2026-03-30T23:23:52.000Z",
            "spotlightedReason": null,
            "approvedIQHours": 548.52,
            "profilePictureKey": "protected/c4d88448-9011-706e-c47b-1a100aab79d5/c7d194f9-139a-4d53-a37b-9669022a0a2d.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2244985",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1888,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2000-12-27",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Gymnastics",
                "Hiking",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Cooking",
                "Crafts",
                "Makeup",
                "Musical instruments"
            ],
            "sfId": "001R700000ZxJDmIAN",
            "totalNumberOfChats": 7,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c4d88448-9011-706e-c47b-1a100aab79d5/c7d194f9-139a-4d53-a37b-9669022a0a2d.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNGQ4ODQ0OC05MDExLTcwNmUtYzQ3Yi0xYTEwMGFhYjc5ZDUvYzdkMTk0ZjktMTM5YS00ZDUzLWEzN2ItOTY2OTAyMmEwYTJkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=hyfly6ZRhmU8dxRtWgmBwaG~8MLxhPBW4p5hC4RPh-9hY7mudcS7WkNap7fqAKaBqZUNZdKGOReJOTt2gtPHE3TfWAq1xkAAehIFCnm~1V~g2xzcXibNlP7sKhE1BlYHxK1EvQ-L-m9C6Xjk7CHkb7mx2M9Oqcq7y3Y1NecyVEgxmY4DA0QlH3WBwKM8F65Ks8SRWjC85vsfAqI1ld-txyWOKDKjADNS4GzX2jP5I35LF6sdrrjUC62i4m-UQOgxHsCfVgmPZpDWTWK1gOQumgoOkcH8ClwMDxgQMXmOgXqCewYNo~PS4quV11PdlzC-EEWruhLe8Nm51lEv8iENvA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2025-03-13",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "University",
                "High School"
            ],
            "loginId": "d49834c8-9021-70d9-5c40-dd97c4a11bd9",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I'd like to help families who can't look after their children after school, at weekends and during the holidays. I have my BAFA in France, which is the qualification required to work in a leisure centre, and I have been babysitting children since I was 12.  In my spare time I do sport, I've been a handballer for 16 years now. I also love pastriesI have a twin sister, one brother aged 26 and my parents have been divorced for 4 years. I live in two towns by the sea in Brittany.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-07-22T16:17:21.985Z",
            "score": 0,
            "opportunityId": "006R700000Jts86IAB",
            "auPairName": "Flavie",
            "id": "d49834c8-9021-70d9-5c40-dd97c4a11bd9",
            "relaxingInterests": [
                "Camping",
                "Journaling"
            ],
            "updatedAt": "2026-04-29T01:19:50.308Z",
            "lastAppLoginDate": "2026-04-28T17:49:37.789Z",
            "spotlightedReason": null,
            "approvedIQHours": 685.6,
            "profilePictureKey": "protected/d49834c8-9021-70d9-5c40-dd97c4a11bd9/e8d8923a-c06b-48f5-94b3-0275fbf08d64.e88c87e0-b893-4173-8093-0abf0e95418b",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "FR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "FRA2037017",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 1982.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "French"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2003-01-15",
            "preferredPets": [
                "Cats",
                "Dogs",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-04",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Handball",
                "Horseback riding",
                "Running",
                "Skiing",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000LUAylIAH",
            "totalNumberOfChats": 71,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d49834c8-9021-70d9-5c40-dd97c4a11bd9/e8d8923a-c06b-48f5-94b3-0275fbf08d64.e88c87e0-b893-4173-8093-0abf0e95418b?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDk4MzRjOC05MDIxLTcwZDktNWM0MC1kZDk3YzRhMTFiZDkvZThkODkyM2EtYzA2Yi00OGY1LTk0YjMtMDI3NWZiZjA4ZDY0LmU4OGM4N2UwLWI4OTMtNDE3My04MDkzLTBhYmYwZTk1NDE4YioiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=i5O12Jxkpu39SEgwtJ0hiyWd3Mas4ADasHqHVibDuvJkBwZZKu1pk2scjvgn-G5MX7nQBBV00b8ukjEuiu~FSasXFdeoyieDdfIK2Xd5jnlxJFPBAXP83TE33BV6NC5ZZ3PV~8bnXt2ATKKbnpJ1HlGbIgNoM7YtPlI7~WwapcACfE4g4Dsbnxxo~PSxzvPDwL2kiYQul3KZxGyoFvLFnVc7WjuNPFvxuKVOD5KIwHplJ21WrE9Sh5Vp5TuEXv0xIFUgHnSPLzPbTYQbMqMkkJvr3eHmJ2tMf2I~-noasBMLtx4gxiZJN3McmTulR6ReOMtc8xVaAJMMte6mu3ByKw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Creative",
                "Organized"
            ],
            "matchingStartDate": "2025-11-07",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "e4989448-e0e1-7024-1a5f-2a8a1398bc05",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Nicole Ortiz, I’m 23 years old and I’m from Colombia. I’m an organized, responsible, creative, and caring person who loves spending time with children. I’m studying Foreign Languages, and I enjoy reading, doing crafts, playing games, and spending quality time with others.\n\nAs your au pair, I’ll be happy to help with daily routines, play and learn with your kids, read stories, and share fun activities. I’ll make sure they feel safe, happy, and loved.\nI’m really excited to meet",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-12T21:45:33.893Z",
            "score": 0,
            "opportunityId": "006R700000WxWRHIA3",
            "auPairName": "Tephy",
            "id": "e4989448-e0e1-7024-1a5f-2a8a1398bc05",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Puzzles"
            ],
            "updatedAt": "2026-04-28T22:20:53.713Z",
            "lastAppLoginDate": "2026-04-28T12:35:57.419Z",
            "spotlightedReason": null,
            "approvedIQHours": 1488,
            "profilePictureKey": "protected/e4989448-e0e1-7024-1a5f-2a8a1398bc05/00f97ea1-e63b-4698-b4cb-58975da0ea09.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2272158",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3046.36,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "French",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-12-24",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Table tennis"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Crafts"
            ],
            "sfId": "001R700000c7anGIAQ",
            "totalNumberOfChats": 45,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/e4989448-e0e1-7024-1a5f-2a8a1398bc05/00f97ea1-e63b-4698-b4cb-58975da0ea09.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9lNDk4OTQ0OC1lMGUxLTcwMjQtMWE1Zi0yYThhMTM5OGJjMDUvMDBmOTdlYTEtZTYzYi00Njk4LWI0Y2ItNTg5NzVkYTBlYTA5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NDc2NTR9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gJm7f85T4se~-FKGO~5eZV7xpQOChpI5FpW6MCZveHgJ~8KqhwZLFOCuf8OaHFkL7LW8eFJAwDd6AYFEBiDtpRMaWWN7vCdIvJkqPdK9gyxCYYROrdnFIkg9c8Ump4l1aFlRw1KBvFiKVqNV0RWt4baycByFvSceyCXi5vaqJS1lBGfRZ2T7-wUxVyo2xxKt0SRIy5CrQjqaoBKU5EwXGIAgyNxYERwXHg6F2T7~FCkxstFNjaAGF9vYvtRUwuctCysoUNf5Y7QiHWc3uQE5NIWEBLGJH2CQyA8YPXTMxKaORTMz9SckdLkkqMgGzEzlMKUf5wYHBa7q4FcyhM~5Zg__"
        }
    ]

const list2 = [
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Intellectual",
                "Laid-back",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "04582418-e041-7037-09a0-51d8608f177d",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, dear host family!\n I am Yuliana, I am 22 years old and I am Colombian. I consider myself a cheerful, caring, and genuine person who enjoys the simple things in life. I like constantly learning, spending quality time with my family, and staying active through sports and outdoor activities. I love nature, animals, and discovering new places. I am known for being responsible, empathetic, and positive, and I always try to create special moments with the people around me.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-30T18:48:28.002Z",
            "score": 64,
            "opportunityId": "006R700000g0jMwIAI",
            "auPairName": "Yuliana Morales",
            "id": "04582418-e041-7037-09a0-51d8608f177d",
            "relaxingInterests": [
                "Camping",
                "Meditation",
                "Movies",
                "Reading",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:21:01.952Z",
            "lastAppLoginDate": "2026-04-29T00:21:01.947Z",
            "spotlightedReason": null,
            "approvedIQHours": 208,
            "profilePictureKey": "protected/04582418-e041-7037-09a0-51d8608f177d/fedb11b5-0599-46e7-a553-82353e71e193.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2379568",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1168,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-06-13",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cycling",
                "Soccer",
                "Table tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000miFnkIAE",
            "totalNumberOfChats": 27,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 5,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/04582418-e041-7037-09a0-51d8608f177d/fedb11b5-0599-46e7-a553-82353e71e193.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNDU4MjQxOC1lMDQxLTcwMzctMDlhMC01MWQ4NjA4ZjE3N2QvZmVkYjExYjUtMDU5OS00NmU3LWE1NTMtODIzNTNlNzFlMTkzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=ZLyb8NBQtIxRn9Pu-SUXQ-X7s3y2MZ0bNPkaFF7rLSiWYPF2MPZ293I1zJi7d6En9mNXaoPy0EVDaRtLujml-BOp5OS6zenIZ555KbiGLj2XtkuZOu0PCvCsgRSdJ0C8DFeqHIYFPjU3U~XJcwfbn7W1gzXAB6FMnXztGRjntOcgWU4rCwtHuZ4vW~urQ~NqDUZYOzgBucxXTMtMz3xCB3TCjJsCAeosWyqguv3tjLom0NJ0uGycMg6ELCRMeKETEANuPrq-hIoCkcbODEvKbTNRDwWEyb6La6GHI3uwODLTaufoRnKwt-d4w2qWc6CX7C~8oMVjomXjkugjTHm0uA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Independent",
                "Organized",
                "Perceptive",
                "Proactive"
            ],
            "matchingStartDate": "2025-12-18",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "24d83468-9031-70a4-cd78-6ccae114d48f",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello dear host family,\n\nMy name is Dayana, I am 24 years old and from Colombia. I studied Public Accounting and have worked in different jobs, which has helped me to be organized and responsible. But one of my favorite experiences was working in a daycare, because I really enjoyed taking care of the kids and spending time with them.\n\nI like cooking, reading, listening to music, doing exercise, and going for walks. I would love to share fun activities, games, and outdoor time with your children,",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-12-18T17:01:33.961Z",
            "score": 64,
            "opportunityId": "006R700000UwE9RIAV",
            "auPairName": "Dayana",
            "id": "24d83468-9031-70a4-cd78-6ccae114d48f",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:31:09.848Z",
            "lastAppLoginDate": "2026-04-29T01:31:09.844Z",
            "spotlightedReason": null,
            "approvedIQHours": 1411.4,
            "profilePictureKey": "protected/24d83468-9031-70a4-cd78-6ccae114d48f/b2decf55-9436-42ce-9f66-1e03c116b572.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2247972",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1411.4,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-01-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Photography"
            ],
            "sfId": "001R700000Zg2m3IAB",
            "totalNumberOfChats": 34,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 5,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/24d83468-9031-70a4-cd78-6ccae114d48f/b2decf55-9436-42ce-9f66-1e03c116b572.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNGQ4MzQ2OC05MDMxLTcwYTQtY2Q3OC02Y2NhZTExNGQ0OGYvYjJkZWNmNTUtOTQzNi00MmNlLTlmNjYtMWUwM2MxMTZiNTcyLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=OkmQpz6sLaqND~5ytgxGeJjAjMDQDvDKbrzCshGXtc8c9FKRNCrCxoKsJZe5LKrOyHXOMC~iRxIW9ZPgziQSrM4enQ8QvvzJz1aI19oN~TZ8RNU52GQO5qtYA4mLM8x50VEeZIstiLtVulMkP2abZu2JWDM9VlXe8fKPZUkP3VZH0MQXyMvaVG1gKF1kSfkNoYoEpUP-ljffXC8aGwsb-qAw6LzSoK0ZKs1HmLTj~TZiZLuz4LBRYK~2e1l-97gXJL1xtqutcwBD3S5aX7z7GQxDCBHK7GvrifsShUFBw0YyJ7hx~NV1cHQ2o7BA~KOaVDJb6JrgEGSOHFvAP9MZ3A__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Calm",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2026-04-23",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "34a86438-b051-7026-a584-dc0c70316504",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Tatiana, but I like being called Tati. I am 24 years old. I consider myself a very organized person; I enjoy following rules and spending quality time with people who are important to me. I have a great connection with children I truly enjoy learning from them, listening to them, and being understanding and patient with each one.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-23T20:05:27.443Z",
            "score": 64,
            "opportunityId": "006R700000IALaIIAX",
            "auPairName": "Tati",
            "id": "34a86438-b051-7026-a584-dc0c70316504",
            "relaxingInterests": [
                "Camping",
                "Meditation",
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:44:01.251Z",
            "lastAppLoginDate": "2026-04-29T01:44:01.246Z",
            "spotlightedReason": null,
            "approvedIQHours": 468,
            "profilePictureKey": "protected/34a86438-b051-7026-a584-dc0c70316504/d247500e-57dc-42d5-9e1f-be64e1002184.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL13563435",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 1310.94,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2001-09-04",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-11-20",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Running"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Drawing",
                "Photography"
            ],
            "sfId": "001R700000EGpkYIAT",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 5,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34a86438-b051-7026-a584-dc0c70316504/d247500e-57dc-42d5-9e1f-be64e1002184.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGE4NjQzOC1iMDUxLTcwMjYtYTU4NC1kYzBjNzAzMTY1MDQvZDI0NzUwMGUtNTdkYy00MmQ1LTllMWYtYmU2NGUxMDAyMTg0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=ajQeghNyilpqASnfPWopnFv9NxPnTqrMVa2CzejuI5xs~LlRhrYUW0klFD~RQzQPMGdmDXhEuQt7YLCoQuQGv1dN2LEOctIKV3FN7ccACZUkVDua6k48TV91kyJPJDYhL~GnSVNb72zajIyaZSt8rujlOdcURyVKuvasUiqv46fLn42riJDHhq0wXFMSbhULphPQjsuRF6MYEjHLtf7xiNA6X59yhkrVkb3gVmZfvMQQp-QNHSbXtUFHxSWY8v8KB3ynt~GUcGMCucYgE3dZ13sNrr4bsUpkFF6WTW08~DHLc3uAMcgUtiG1BlQvmeZJScaM5i9Z4gEUHNoIhT35Sw__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Driven",
                "Flexible",
                "Perceptive"
            ],
            "matchingStartDate": "2026-02-27",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "6498b4a8-a071-703c-d1d3-a04ebc5e763c",
            "okToLiveWithPets": false,
            "aboutSelfAndInterests": "I am a simple and genuine person who finds joy in small, everyday moments. Spending time with my nephew helped me understand how much I enjoy being present, playing, talking, and creating a safe space where a child feels loved. I like music, walks, and sharing meaningful moments. I would love to bring positive energy into your home and become someone your children can trust and feel comfortable.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-02-27T22:36:10.618Z",
            "score": 64,
            "opportunityId": "006R700000eXEy2IAG",
            "auPairName": "Carmen",
            "id": "6498b4a8-a071-703c-d1d3-a04ebc5e763c",
            "relaxingInterests": [
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-26T18:52:12.837Z",
            "lastAppLoginDate": "2026-04-26T05:58:58.511Z",
            "spotlightedReason": null,
            "approvedIQHours": 1155.48,
            "profilePictureKey": "protected/6498b4a8-a071-703c-d1d3-a04ebc5e763c/c80f9822-9d36-48b3-97aa-970dfa23f5d0.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2325977",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1246.32,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Italian"
            ],
            "numberOfChildrenCanCareFor": [
                "4+ children"
            ],
            "dateOfBirth": "2003-03-05",
            "monthsLeft": 0,
            "preferredPets": [],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Gymnastics",
                "Running"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Concerts",
                "Makeup"
            ],
            "sfId": "001R700000l3KIeIAM",
            "totalNumberOfChats": 15,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 5,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/6498b4a8-a071-703c-d1d3-a04ebc5e763c/c80f9822-9d36-48b3-97aa-970dfa23f5d0.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDk4YjRhOC1hMDcxLTcwM2MtZDFkMy1hMDRlYmM1ZTc2M2MvYzgwZjk4MjItOWQzNi00OGIzLTk3YWEtOTcwZGZhMjNmNWQwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Nn1hJZF90ujz~JZMxBUHIqB8vfCPhZkXYnz6Fi~1SASyGkfrY3UjVuh5sCjnIKvdOVlpuWYzy-I908X8xRLd8ert3GUFotHL~Xg6Ldq3Bwyi~ZJCZ55l3Udv9xQu5jyK9OMlDNnCYma~tzYW~0I95DVpvl1cmZ7dpIeSAZmoamBXHu9Y3MEUFQbd~~YoFr3oj14oiZmUapQdbLFVED-9OnYb90gjosRmR-eB8sKmUKXiTZQSrBLPgG2TMInMkfXIlsmlX9oBAwUUVwUxM0gDj4iamKdgwfvzw21doLLg6bCLkpOJAtvrMN-iBjGGOuTdAn3l~n-aHq~lRFXtJLQ0mQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Laid-back",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-11-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University",
                "University"
            ],
            "loginId": "b4d87498-3061-70e3-d8dc-74d8b40d7d3c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello dear host families! 🇨🇴✨\n\nMy name is Carolina, and I’m a kind, patient, and responsible person who truly enjoys caring for children and supporting their daily routines 💕\n\nI’m creative and love art, music, and outdoor activities like going to the park 🌿🎨 I also live independently, so I’m organized and able to manage my responsibilities with maturity and commitment 💪\n\nI would love to be part of a warm family and create meaningful experiences together 💛",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-28T19:00:14.450Z",
            "score": 64,
            "opportunityId": "006R700000XZA4kIAH",
            "auPairName": "Caro",
            "id": "b4d87498-3061-70e3-d8dc-74d8b40d7d3c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T02:12:24.338Z",
            "lastAppLoginDate": "2026-04-29T02:12:24.333Z",
            "spotlightedReason": null,
            "approvedIQHours": 1478.55,
            "profilePictureKey": "protected/b4d87498-3061-70e3-d8dc-74d8b40d7d3c/713e911a-77dd-42e4-99fe-1fa3e76dae73.webp",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2279373",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3267.83,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-03-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Badminton",
                "Baseball",
                "Basketball",
                "Cheerleading",
                "Cricket",
                "Cycling",
                "Dancing",
                "Field Hockey",
                "Fishing",
                "Golf",
                "Gymnastics",
                "Handball",
                "Hiking",
                "Horseback riding",
                "Ice hockey",
                "Lacrosse",
                "Martial arts",
                "Pickleball",
                "Roller skating",
                "Rugby",
                "Running",
                "Sailing",
                "Skateboarding",
                "Skiing",
                "Soccer",
                "Softball",
                "Squash",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball",
                "Water sports",
                "Wrestling"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing",
                "Social media",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000ct88kIAA",
            "totalNumberOfChats": 21,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 5,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/b4d87498-3061-70e3-d8dc-74d8b40d7d3c/713e911a-77dd-42e4-99fe-1fa3e76dae73.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9iNGQ4NzQ5OC0zMDYxLTcwZTMtZDhkYy03NGQ4YjQwZDdkM2MvNzEzZTkxMWEtNzdkZC00MmU0LTk5ZmUtMWZhM2U3NmRhZTczLndlYnAqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDU1ODIwfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=c~-W3IV7O9x7PzFrrGaSiRatW~XiWjkZ4euRz0kCdcxRIMXTZAd8eHnHoR0tKmesMtnerL-vBibzu~WY38aoHlHrcU-xHsoEc3IXj09PtPAMEMOLhEOeqoM7O0r8GEFJzOdjrDSD2i~dmI4VUxWZfUOkJjQHzq8Rdkm0FEWnDxSWQp-wlHmLwZHgPDaSkClyOsEuf4NLmLg~wlPLHp7ss3DEBXGcO8Ra9Mc3unPUpFibhu0Jna2P3V3cNz3B9RI-95VwLmI8nqDwadckw1-Ne6otR9WavsIuZ~H8csaFGCpqpsZ0o9v4RSCfqYGVbJIh8~TMFgapr5Wez1hoTLO~dw__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Independent",
                "Warm"
            ],
            "matchingStartDate": "2026-03-20",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "f4c8d498-f0c1-70d6-0b14-60a4688e72d2",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Melissa has always been told that her smile lights up any room. She lives life to the full and isn’t afraid to laugh out loud or cry when she needs to. She is kind, empathetic, and intelligent, though sometimes a bit absent-minded. Meli follows her heart, is brave, and works hard to achieve her goals. She loves art, enjoys life, and has always had a special connection with children and animals. Nice to meet you, I’m Meli 🤍",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-20T23:49:17.693Z",
            "score": 64,
            "opportunityId": "006R700000fNs6YIAS",
            "auPairName": "Meli",
            "id": "f4c8d498-f0c1-70d6-0b14-60a4688e72d2",
            "relaxingInterests": [
                "Journaling",
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-29T02:07:39.933Z",
            "lastAppLoginDate": "2026-04-29T02:07:39.929Z",
            "spotlightedReason": null,
            "approvedIQHours": 6803.5,
            "profilePictureKey": "protected/f4c8d498-f0c1-70d6-0b14-60a4688e72d2/03612afd-312b-4734-a811-8d95a445cd74.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL13755282",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7153.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-05-12",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Roller skating",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Graphic design",
                "Photography",
                "Social media",
                "Writing"
            ],
            "sfId": "001R700000EHNtNIAX",
            "totalNumberOfChats": 16,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 5,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4c8d498-f0c1-70d6-0b14-60a4688e72d2/03612afd-312b-4734-a811-8d95a445cd74.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNGM4ZDQ5OC1mMGMxLTcwZDYtMGIxNC02MGE0Njg4ZTcyZDIvMDM2MTJhZmQtMzEyYi00NzM0LWE4MTEtOGQ5NWE0NDVjZDc0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=WvIbgMJkAwPUSrisnhVDenKP9yGwtLAUXZ4LUsBX2ArRjJffnUpn4G5yW3rx3HYaK5daXJdAMWau0fGdooRC0ZGUr7ypnyN2TK6vNjZbmMMCacGFjDQ1t3h8XqP-t-K-GGDhvAlvvpWhHUUJT45ybinWvmbFXjJL-u69L5gWNFBUio9ZyqHZSk6qgS05-G-3B~Qg~C2Nw9stgNcSL8G9A9Ca80c~YH-CRRHjpwT2ETYa3ln7BMGBEDOpw~WpCxU3KPU1on~csuOJ95GyqEf8E1G7VGvTAmbzgMjAFgyzBosBWnA3jFLX14k2hhZe8ZX~lzyI3CJOU3-8TufudPttPQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2025-10-13",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "24a81468-20a1-70ef-dc8b-abfb072c811d",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, it's a pleasure to meet you. My name is Paula Valentina, I'm twenty-one years old, I live in Bogotá, I'm from Boyacá, in the municipality of Soatá. My dream is to learn a new language and discover new things, new places, and new opportunities in life. I'm proactive, cheerful, affectionate, calm in solvable situations, good with children, fun, and very helpful. I look forward to meeting you soon. A pleasure.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-13T21:21:26.477Z",
            "score": 64,
            "opportunityId": "006R700000Q3bosIAB",
            "auPairName": "Paula",
            "id": "24a81468-20a1-70ef-dc8b-abfb072c811d",
            "relaxingInterests": [
                "Camping",
                "Gardening",
                "Meditation",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-27T18:37:59.654Z",
            "lastAppLoginDate": "2026-04-27T18:35:39.205Z",
            "spotlightedReason": null,
            "approvedIQHours": 2230.65,
            "profilePictureKey": "protected/24a81468-20a1-70ef-dc8b-abfb072c811d/3783afab-ec11-4f34-b869-11fefc615592.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2011915",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 4533.45,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-06-06",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Swimming",
                "Table tennis"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing"
            ],
            "sfId": "001R700000T9xpnIAB",
            "totalNumberOfChats": 60,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/24a81468-20a1-70ef-dc8b-abfb072c811d/3783afab-ec11-4f34-b869-11fefc615592.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNGE4MTQ2OC0yMGExLTcwZWYtZGM4Yi1hYmZiMDcyYzgxMWQvMzc4M2FmYWItZWMxMS00ZjM0LWI4NjktMTFmZWZjNjE1NTkyLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Z7G46WuEZ-4gpoCPwFWntYAbZzSItEIIP~xWy8tP4ogYNJYK--sRQhXkAuJ-MlfnV-rIZxiVgUXjcA5scUe1VQ5A-VvCZUUNlQP5QGd~frXjbtGfgs06DGEyKMTOIspxj39Hu1QE1JBO676kuwipafP~~I-mSnBFobs-uRvgZvrB1dvpeh4g1axN~WtM0yCRmpzjVQaJS3gfZTwaU8jYIfkVNi~XFV3BtxfO1WFwKD42HEhdpNlWpUIkiQ3vSt4MTxDem44t3FRFKUvKFAmnKZkwTv7l5ssvkOSbmFoGb5aYvnC4BfqLKVosxKUvFZ1e5oD4RpAF2Kq4Kv-Ms5iSlw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "24f85408-8021-703e-97e1-6da0afb929ba",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! :) I am a girl with dreams, caring , responsible, and positive person who truly enjoys spending time with family and children. Family is very important to me. I grew up in a loving environment where respect, kindness, and faith are essential. I believe in God, and my faith guides my life and helps me be patient, compassionate, and joyful in everything I do.\nI love do a lot of things like, playing volleyball, piano, guitar, singing etc I am respectful, organized, and always willing to help.:)",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T18:14:07.840Z",
            "score": 64,
            "opportunityId": "006R700000iVcJ1IAK",
            "auPairName": "Ana",
            "id": "24f85408-8021-703e-97e1-6da0afb929ba",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Movies"
            ],
            "updatedAt": "2026-04-29T03:43:13.107Z",
            "lastAppLoginDate": "2026-04-29T03:43:13.102Z",
            "spotlightedReason": null,
            "approvedIQHours": 230,
            "profilePictureKey": "protected/24f85408-8021-703e-97e1-6da0afb929ba/9ddbd41a-063d-4b49-8aa7-6b02c90ef60f.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2404468",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1311.4,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-12-11",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading",
                "Cycling",
                "Dancing",
                "Fishing",
                "Gymnastics",
                "Ice hockey",
                "Roller skating",
                "Running",
                "Sailing",
                "Skiing",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000pW4xhIAC",
            "totalNumberOfChats": 0,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/24f85408-8021-703e-97e1-6da0afb929ba/9ddbd41a-063d-4b49-8aa7-6b02c90ef60f.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNGY4NTQwOC04MDIxLTcwM2UtOTdlMS02ZGEwYWZiOTI5YmEvOWRkYmQ0MWEtMDYzZC00YjQ5LThhYTctNmIwMmM5MGVmNjBmLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=QS9Ad78T5GYlhqP~7JUNLHmroKSdVWR3TbVQzhHv3NgU9cBLvQ6ogh0VzzcoWeXhRaFU218cmDbhXKvwqwX7LpOIH~563GeH4QnQCErA2xVFbW1L0HQM2Kqp-ltvWZ~1BmvZzz4paZ9uW0-f8Qzr4cTW5118YBje1E4YoaFTgJwD1lLhwjgp57xmNQZ3TslnHHUOBu07nsiGLxk7BurxcCQZIPL4XOUs04uybVdKLHnNSF5QdO2~PhtJUdy4PFzMp9bFWrIJOJf9~NZJucdVHWKoN47tYoL3OCoH34bxqDISZQElOLwPUpZPXkD~CgH6Iow9gQQPOkpt3rocxKttaQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Empathetic",
                "Family-oriented",
                "Organized",
                "Trustworthy"
            ],
            "matchingStartDate": "2025-05-09",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "4428f458-f0e1-70a1-1062-5c11774f01d2",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! I'm Val, 24 years old, and I'm currently studying business administration at university. I love animals and outdoor activities. I love cooking, working out, and studying.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-05-09T16:12:34.605Z",
            "score": 64,
            "opportunityId": "006R700000PR86MIAT",
            "auPairName": "Valeria",
            "id": "4428f458-f0e1-70a1-1062-5c11774f01d2",
            "relaxingInterests": [
                "Camping",
                "Gardening",
                "Journaling"
            ],
            "updatedAt": "2026-04-29T02:49:46.040Z",
            "lastAppLoginDate": "2026-04-28T17:42:00.135Z",
            "spotlightedReason": null,
            "approvedIQHours": 1879.74,
            "profilePictureKey": "protected/4428f458-f0e1-70a1-1062-5c11774f01d2/9d86082e-2489-4ea8-80a9-188c14e5ca9c.jpeg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CL",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "CHL2175396",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years",
                "All ages"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4083.48,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2000-08-11",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-09-04",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Hiking",
                "Roller skating",
                "Running"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking"
            ],
            "sfId": "001R700000SMeRhIAL",
            "totalNumberOfChats": 86,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/4428f458-f0e1-70a1-1062-5c11774f01d2/9d86082e-2489-4ea8-80a9-188c14e5ca9c.jpeg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NDI4ZjQ1OC1mMGUxLTcwYTEtMTA2Mi01YzExNzc0ZjAxZDIvOWQ4NjA4MmUtMjQ4OS00ZWE4LTgwYTktMTg4YzE0ZTVjYTljLmpwZWcqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDU1ODIwfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=MAxIucRNxpQ8zKa8g8wSzSdlpqgoAdKeHKS9M26RK~2B~aQkN40uGmy01uMzwHGkytr0DU875H5YkeVu0yZ4NRRsU40YseXuGMrCTRIO-k8RIkSKXbs~~A8-Rgz8ftxvsdDZkP4I6Yv5fnN3RExq-IP15Gk5HcPldMNzQHZTDJ3qKTZPPe7uNp71tKCorqJMGWQrNs18F47Hlh6-Sr-I7ZT~-7jEppx0Qch2zrJBBoXWb0FzZ3ZHSWGd0V0xLDN01qK~VzZiJQLAQa5W3QXXMgeyES5hjsrvJoY-Mm0TwNOPEykcz7Zvto4Eg4oWDJbGuRSwpp63zBoUasNsMC9Z4Q__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2025-11-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "44a864a8-a011-7069-6fc3-675e307557ea",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Giovana de Oliveira Trajano, I am 23 years old and a lawyer. I graduated from law school in 2024 and currently work in consumer law. I live with my parents and our two dogs, and I have a brother and a sister who live independently. Growing up in a close family taught me responsibility and care for others. I am responsible, adaptable, detail-oriented, caring, and patient, and I enjoy creating a warm and positive environment for children and families.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-28T23:00:10.126Z",
            "score": 64,
            "opportunityId": "006R700000OoOCbIAN",
            "auPairName": "Giovana",
            "id": "44a864a8-a011-7069-6fc3-675e307557ea",
            "relaxingInterests": [
                "Journaling",
                "Meditation",
                "Movies",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T03:41:43.752Z",
            "lastAppLoginDate": "2026-04-29T03:10:54.055Z",
            "spotlightedReason": null,
            "approvedIQHours": 200.52,
            "profilePictureKey": "protected/44a864a8-a011-7069-6fc3-675e307557ea/8fc9bb1c-a615-4ad4-bfd1-935c242a275b.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2166359",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5500.52,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2002-07-26",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2027-01-01",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Running",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking"
            ],
            "sfId": "001R700000Rbn73IAB",
            "totalNumberOfChats": 92,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44a864a8-a011-7069-6fc3-675e307557ea/8fc9bb1c-a615-4ad4-bfd1-935c242a275b.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NGE4NjRhOC1hMDExLTcwNjktNmZjMy02NzVlMzA3NTU3ZWEvOGZjOWJiMWMtYTYxNS00YWQ0LWJmZDEtOTM1YzI0MmEyNzViLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=QFWOtULWpw9ZKoy30ufrauiWDgsp0XysJZM4gLviC98sQS~5oaCBIu8kTfIEsO1ED9fXckbd1eUT9hbDIHTNG7Dlunsumi9rjWrHq3kR~3Zzu9NitmaNNqJEENuh0nOa~vPxiHJWO~mYnoGSEyS9E1nJ5y1ufZIMkKes9tM0l0ezYMPyVQ0FxStvATo-1arCpUU7CB0qLEYEDhLlIhIc8pqtu8xbfI7jzgW5bVTF7BocPNTS~MS8WCP2o2A3Zfr4I9huMJndoF1D7gnsU8Nbq3jk2tvw3jNmZ043X1R7MK0IBU1YhUe5b5iIehDBEgLWgaLAmL2Vb75LgRM7fl8s3Q__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "44a8e458-f081-7023-0b57-0e7aee485e16",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Studying psychology, my focus is working with kids, I already have experience with them, but what I really want is to impact others out of my country, teach them about my culture and be part of a new one, always open to learn about everything. I'm an active person, like to explore and love to read. Really like to be part of nature and be able to know wild life. Enjoy family time but also time with myself.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T19:04:12.791Z",
            "score": 64,
            "opportunityId": "006R700000hwKlZIAU",
            "auPairName": "Angelica Josselyn",
            "id": "44a8e458-f081-7023-0b57-0e7aee485e16",
            "relaxingInterests": [
                "Camping",
                "Card games",
                "Gaming",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T02:54:25.186Z",
            "lastAppLoginDate": "2026-04-29T01:19:19.632Z",
            "spotlightedReason": null,
            "approvedIQHours": 345,
            "profilePictureKey": "protected/44a8e458-f081-7023-0b57-0e7aee485e16/c161765c-eeec-4131-91ce-9a9d8bbe7d22.jpeg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2390791",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 9014.45,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Advanced - Level 6",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-11-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Other"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2027-03-19",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Photography",
                "Writing"
            ],
            "sfId": "001R700000ottjpIAA",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44a8e458-f081-7023-0b57-0e7aee485e16/c161765c-eeec-4131-91ce-9a9d8bbe7d22.jpeg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NGE4ZTQ1OC1mMDgxLTcwMjMtMGI1Ny0wZTdhZWU0ODVlMTYvYzE2MTc2NWMtZWVlYy00MTMxLTkxY2UtOWE5ZDhiYmU3ZDIyLmpwZWcqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDU1ODIwfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=I9Bqqw4T6ViQCnEjwQaV1L5OeJHDhgsZ1zG6WUmebZoJB7oFCZGAxryByquri3bXubSUdZtnACptbSR17Lv046WO7g0oF8qBWXlCpK73AuyCIKZ9ELLrI1itKNjIGeBfREz~Z9nKylmpC0woDtL0mlo-flKh-wIzLBza14Tm58rqcwSScDiOS6kwyFZ7RxI8HhH40t8AngGkpfCLe79cSWQdQZOOrU6xAxP0Sqnc0~R~6EDzVzS831-dJqaNNB9WztL7SHHh3J56M--AMDnpkUovw9lLJM4VQFLkTP8No11xXN0etyisXkAmOOfeP9sfCEB71hh5PE6bxRdXUh66Cw__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Empathetic",
                "Funny",
                "Independent",
                "Organized",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "5438d418-c041-704f-6829-78bf4fce12bf",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Monserrat, I’m a 24 year old, Industrial Engineering graduate from Mexico. I’m a creative and caring person who loves reading, drawing, and painting in my free time. I also enjoy listening to music, watching movies or series, going for walks, and playing games. I’m patient, responsible, and truly enjoy spending time with children whether it’s helping with homework, doing creative activities, or just having fun together.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-30T13:27:13.402Z",
            "score": 64,
            "opportunityId": "006R700000bQBlhIAG",
            "auPairName": "Mon",
            "id": "5438d418-c041-704f-6829-78bf4fce12bf",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Journaling",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T02:46:39.784Z",
            "lastAppLoginDate": "2026-04-29T02:46:39.780Z",
            "spotlightedReason": null,
            "approvedIQHours": 3702.78,
            "profilePictureKey": "protected/5438d418-c041-704f-6829-78bf4fce12bf/e9278477-c7ee-4d5c-93f6-e29104239e12.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2319259",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 8519.22,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-11-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Baseball",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Crafts",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000hUciDIAS",
            "totalNumberOfChats": 6,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/5438d418-c041-704f-6829-78bf4fce12bf/e9278477-c7ee-4d5c-93f6-e29104239e12.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDM4ZDQxOC1jMDQxLTcwNGYtNjgyOS03OGJmNGZjZTEyYmYvZTkyNzg0NzctYzdlZS00ZDVjLTkzZjYtZTI5MTA0MjM5ZTEyLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=GQnLDWDa3OnGM9DCKsOrYVgbFHLAXUgWufB3cRpc3CLmYwZ6Nrk239qYizvTAMxhFNWEouMgZp6ziuu2iM5SWBFfAPVTWvrHLry8E2PU7ut4ew9ioNJ97X-uAteLqVRuRgYhjkSH-PiZqMLTV7gE0f1Or9xJIAmbwf-rfq3wLmR-D8VO0ID5kdOvfl2fp4pOB-ajk5fnMQ0RTtexXAv6gTzIAZSSM4nQvhaTPmnfnHxJNlEdqbUhRTOCOSfQqhiyDfmjsKF7HWOxFD56CU9Vzlz8NSIE1VNN5ksGCfMbimgYowoGEahqPBrNsSw4RDGxYcFIN5jTmZ5Tu77CIs7OHA__"
        },
        {
            "personalityTraits": [
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Funny",
                "Organized",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-01-09",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "54583488-90a1-7032-2d4b-c9e4b37e4954",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I'm an empathetic, patient and creative girl. I love learning new things and talk about different topics. I'm really interested in holistic therapies and the universe with all it's mystery. I'm a Reiki healer with three courses and I love it. Spending time with my family is very important to me, we definitly appreciate a good laugh! I'm an introvert, so being alone sometimes is really good for me too, it's a time to recharge, organize my thoughts and watch my beloved brazilian soap operas!",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-09T21:01:04.874Z",
            "score": 64,
            "opportunityId": "006R700000bOdJ5IAK",
            "auPairName": "Mariana",
            "id": "54583488-90a1-7032-2d4b-c9e4b37e4954",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:43:35.849Z",
            "lastAppLoginDate": "2026-04-29T00:43:35.837Z",
            "spotlightedReason": null,
            "approvedIQHours": 1571.6,
            "profilePictureKey": "protected/54583488-90a1-7032-2d4b-c9e4b37e4954/452edaa5-05b9-4342-9fd4-eed149d193b8.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2326147",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1571.6,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2000-02-29",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2027-01-22",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup",
                "Writing"
            ],
            "sfId": "001R700000hSviYIAS",
            "totalNumberOfChats": 125,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": true,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/54583488-90a1-7032-2d4b-c9e4b37e4954/452edaa5-05b9-4342-9fd4-eed149d193b8.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDU4MzQ4OC05MGExLTcwMzItMmQ0Yi1jOWU0YjM3ZTQ5NTQvNDUyZWRhYTUtMDViOS00MzQyLTlmZDQtZWVkMTQ5ZDE5M2I4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Vag1JltWrtGTlQ39mUlVAbBHlBXljk9zw3Q2xH2l3AbZenkdDGPfUw~ZbiSSniiEFgUHDCMIIlIKDLi5mSX4bSIygkRDoJQXoA3hdasdFrqpBmGHWLPfPafkFlHcnjrD~bL0wWYHh5Fnih6~DZ4P~RS1SW0n77C9gG5S6s7HYuBsyXahG2Mx8k0n0doRktVa7UDWO7kUMWZ5Wa105SWO~d~IZutjrryE-~v0xYoHTKilca8KBD2VS2nOYnEoGXF7dSSHycVZDw9e-MQahmMhtFgo0px4fWVEnte8x~jIppS8RnsMXVOupMYYdN0DN7rp25A6H6575ztW5Ny5Ol3Nsg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Creative",
                "Perceptive"
            ],
            "matchingStartDate": "2026-02-06",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "64986498-e0b1-70e3-1b1e-c2044b693e95",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi I'm Lizeth, I'm 22 years old, and I consider myself as a loving and dedicated person. I truly enjoy spending time with children and creating a safe and joyful environment for them. At the same time, I have a strong character that allows me to respectfully set boundaries and maintain discipline in a positive way.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-06T21:01:07.689Z",
            "score": 64,
            "opportunityId": "006R700000UpCqhIAF",
            "auPairName": "Lizeth",
            "id": "64986498-e0b1-70e3-1b1e-c2044b693e95",
            "relaxingInterests": [
                "Board games",
                "Gaming",
                "Gardening",
                "Movies",
                "Puzzles",
                "Reading"
            ],
            "updatedAt": "2026-04-29T02:15:39.882Z",
            "lastAppLoginDate": "2026-04-29T02:15:39.877Z",
            "spotlightedReason": null,
            "approvedIQHours": 302.8,
            "profilePictureKey": "protected/64986498-e0b1-70e3-1b1e-c2044b693e95/e69e6a51-0eee-434e-add9-797fef6c558b.jpeg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2246535",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3301.68,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-11-30",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Fishing",
                "Gymnastics",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Crafts",
                "Drawing",
                "Graphic design"
            ],
            "sfId": "001R700000ZX4iFIAT",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64986498-e0b1-70e3-1b1e-c2044b693e95/e69e6a51-0eee-434e-add9-797fef6c558b.jpeg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDk4NjQ5OC1lMGIxLTcwZTMtMWIxZS1jMjA0NGI2OTNlOTUvZTY5ZTZhNTEtMGVlZS00MzRlLWFkZDktNzk3ZmVmNmM1NThiLmpwZWcqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDU1ODIwfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=VLvU-h0O9YMoeNo8xaf1xfxCWnXuQk7g17EoRIm-A88FByvaDFv8N7m-8avarXkyOTXJsHPA3GLwTqAZ6zDB~GKzkSMfpq-~TBvRjuQPlelpC1o1~tteawqI2VOnf7MDZusAkEyx8DP7tKEkjh8c0e4odoCPrkhYQKRxe~a-1mgFcRXmsxCiX6RYInJqD3TjlV1uHkNfe8yCFfjqvFyAqVKGoKRG0OsxsHbVdsBmc4I9sX-eWQfVOWTs91DLs0E9~W7qQgVyOatpUaMRT8JclrfAMc8HYOE2Bs59BzQaVGw1lsoDq6U1v5oOzzpiST0XtCZjvLIFJymvf8HZLEUdDA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Driven"
            ],
            "matchingStartDate": "2026-01-30",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "74189488-d0a1-7072-bf88-61eeb3029867",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Lucia, I am 21 years old.\n\nI am currently doing civil service, an experience that is helping me grow in responsibility and teamwork.\n\nAt the moment, I do not speak English, but I am very motivated to learn and improve every day.\n\nI am a calm, polite, and respectful person, open to new cultures and ways of life. I hope this experience will be a positive cultural and human exchange.\n\nKind regards,\nLucia",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-01-30T15:01:38.256Z",
            "score": 64,
            "opportunityId": "006R700000cdaNWIAY",
            "auPairName": "Luli",
            "id": "74189488-d0a1-7072-bf88-61eeb3029867",
            "relaxingInterests": [],
            "updatedAt": "2026-04-25T16:00:24.485Z",
            "lastAppLoginDate": "2026-04-20T10:49:03.752Z",
            "spotlightedReason": null,
            "approvedIQHours": 2310,
            "profilePictureKey": "protected/74189488-d0a1-7072-bf88-61eeb3029867/67a078bd-f1d7-44ed-b817-5359aabaa083.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2342534",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2726,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "None",
                "Italian"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2004-08-04",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Makeup",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000iwOwiIAE",
            "totalNumberOfChats": 30,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/74189488-d0a1-7072-bf88-61eeb3029867/67a078bd-f1d7-44ed-b817-5359aabaa083.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NDE4OTQ4OC1kMGExLTcwNzItYmY4OC02MWVlYjMwMjk4NjcvNjdhMDc4YmQtZjFkNy00NGVkLWI4MTctNTM1OWFhYmFhMDgzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=g9BESn8D0p3yqYSjLH8SEj9jux6V8CsnKCS1gD04cLMDaEq05EW0g86KXaNl5islRsNIMynLIbTiBUjU6x99XLyytdGptIJ6z9872R12g0dIAEA5e9l17ply0G8QIM8Os0JautJYbEOT3HQI9fYPJjm-zIx~GcT~5T7uepqUz4HWwvIM954hzdg8vRWwgr36RJQXw2kHi8~-kQBWkkuefKk6yXPZyFrMZDcWDxNZ5aIBnI3BKA42rrUDLKROmanate1-wOabGDKuQ1lBL6HzMXJ-wmCEb-q92ELuc0-7R6LEMAgYc7MzUtIAKVLnJUlI2OxC5fTie--KZ-b4BKIX3g__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Funny",
                "Proactive"
            ],
            "matchingStartDate": "2026-03-13",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "84c89408-f081-7058-35a8-f51b5d0d3841",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello! I'm Majo, a passionate speech therapist, with experience in clinics, schools and private practice. I develop in child neurodevelopment, early stimulation, speech therapy, MOF rehabilitation and dysphagia. I am affectionate, responsible, assertive and creative. I live a healthy lifestyle and really enjoy working with children, creating safe and supportive environments. I love makeup, taking pictures, seeing new places and going to the gym. I love ice cream, the beach and walking and sunset",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-13T19:01:29.796Z",
            "score": 64,
            "opportunityId": "006R700000eYdSwIAK",
            "auPairName": "Maria Jose",
            "id": "84c89408-f081-7058-35a8-f51b5d0d3841",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gardening"
            ],
            "updatedAt": "2026-04-29T01:49:56.260Z",
            "lastAppLoginDate": "2026-04-29T01:49:56.254Z",
            "spotlightedReason": null,
            "approvedIQHours": 1445.15,
            "profilePictureKey": "protected/84c89408-f081-7058-35a8-f51b5d0d3841/bf5f3f7a-0376-40f0-9aed-132bafcd12c6.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2363256",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2074.87,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-11-30",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000l4oPlIAI",
            "totalNumberOfChats": 29,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": true,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84c89408-f081-7058-35a8-f51b5d0d3841/bf5f3f7a-0376-40f0-9aed-132bafcd12c6.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NGM4OTQwOC1mMDgxLTcwNTgtMzVhOC1mNTFiNWQwZDM4NDEvYmY1ZjNmN2EtMDM3Ni00MGYwLTlhZWQtMTMyYmFmY2QxMmM2LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=OA8ekcDG-0RG~DKfKwMTPDqyUPlR-MhNQiTdvYrDpbPc1EB3hpuDO768weqP-kdwxEM-r2oGAAjgBWwZVN0ZL2bi8DcOqOC86419tSUa8ekBxxHFPViGTKfJcUB7Rfr-gevseaPifgN3GRF0Y6NwtUCs7SUjOeKbaJANsR8RkBSoE8I~o7r4V1GidfwSm-44z2UMBGqzLbpIhIvLCIFoaY9ymvMGFwVrETbDw~e6TUHgO8an56aN~GEQraASt7Jf3uKvmJJnkC4QwCg~4naByjhrYFYg9mwpb-830KFQpl82~LsDliOFT3Sw9s6~Ollltix79gudUOHS~S2xn56eiQ__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Energetic"
            ],
            "matchingStartDate": "2025-09-19",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "940804f8-5071-70db-48f6-e323fceaf7e1",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Sarah, I’m 23 and I come from Amazonas, Brazil. 🌳🇧🇷 I’m calm, friendly, and easygoing, and I love enjoying simple things in life. I enjoy spending time with family and friends, talking, laughing, playing board games, or watching movies. I also love exploring new places, being outdoors, relaxing at waterfalls, and animals. One of my dreams is to have a farmhouse and live peacefully in the countryside 🥰",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2025-09-19T16:58:32.335Z",
            "score": 64,
            "opportunityId": "006R700000UTszpIAD",
            "auPairName": "Sarah",
            "id": "940804f8-5071-70db-48f6-e323fceaf7e1",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Movies",
                "Reading",
                "Television"
            ],
            "updatedAt": "2026-04-29T02:01:58.609Z",
            "lastAppLoginDate": "2026-04-29T02:01:58.604Z",
            "spotlightedReason": null,
            "approvedIQHours": 1217.1,
            "profilePictureKey": "protected/940804f8-5071-70db-48f6-e323fceaf7e1/e807a198-9cba-4e9c-93d5-054d1ad86ab7.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2030200",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 1217.1,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-04-19",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Martial arts",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Drawing"
            ],
            "sfId": "001R700000HpcvtIAB",
            "totalNumberOfChats": 41,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/940804f8-5071-70db-48f6-e323fceaf7e1/e807a198-9cba-4e9c-93d5-054d1ad86ab7.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC85NDA4MDRmOC01MDcxLTcwZGItNDhmNi1lMzIzZmNlYWY3ZTEvZTgwN2ExOTgtOWNiYS00ZTljLTkzZDUtMDU0ZDFhZDg2YWI3LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=X5VZi5jjuz6D7EUCLbXm-GbAU2jzynAz1dr-tu1oE4RmLZL~t~90T41pvrAoE391HNHili8M8PpLsPTPc09F99amI0~ovP9oXbaXAfNJcSLrRezBNWABDx7pgFEUke7lGL8urs9nWsOodzr-~EaZgJdGdKAfeKEsGL~vRmWiPWc6HJjZtLj~UTZzHkfrX3Y0eYfSCtKWj2NChuGudDMmT7TBorrX0hUj24W8BqOpYu41r~TgxM-ohJwp5y5V0j~QYtraslRsNF7lYAP~xCwOkveay6ZDKlo3clDodWT1I-mYdUr5S19rPQu8hGG5SBM1Hzi4JxRTOwzQHVzEkHt8Gg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2026-04-27",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "94181478-8001-7063-09d1-681a52854edd",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello! My name is Manu. I am a caring, responsible, and kind person who truly enjoys spending time with children. I am the godmother of a little boy named Santi, and I love taking care of him and playing together. I also enjoy singing and dancing, and I really appreciate the joy and innocence that children bring. I am excited about the opportunity to live a new experience and grow both personally and culturally.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-27T16:39:06.312Z",
            "score": 64,
            "opportunityId": "006R700000dkUnsIAE",
            "auPairName": "Manu",
            "id": "94181478-8001-7063-09d1-681a52854edd",
            "relaxingInterests": [
                "Camping",
                "Card games"
            ],
            "updatedAt": "2026-04-29T03:15:52.303Z",
            "lastAppLoginDate": "2026-04-29T03:15:52.299Z",
            "spotlightedReason": null,
            "approvedIQHours": 498.96,
            "profilePictureKey": "protected/94181478-8001-7063-09d1-681a52854edd/b96dd0c9-e2db-4994-83fb-59fb628a7ade.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2183671",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5549.04,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2002-07-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts"
            ],
            "sfId": "001R700000k8AqwIAE",
            "totalNumberOfChats": 1,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/94181478-8001-7063-09d1-681a52854edd/b96dd0c9-e2db-4994-83fb-59fb628a7ade.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC85NDE4MTQ3OC04MDAxLTcwNjMtMDlkMS02ODFhNTI4NTRlZGQvYjk2ZGQwYzktZTJkYi00OTk0LTgzZmItNTlmYjYyOGE3YWRlLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=WsfdlLNw6hm2xcjEs2bM3LDmsUeWj8U92mB8pTRqfODGhtrB51z-O135qif-BDNSE8gPhTmaCJEykif2JoxDMlWe0m-iPreTMIpKe1PvMKqKgyt49k37xH8ZlTdAQyd9so34w~f2Cm3C-fAqqiVoMWzms3tvhXSEN7mncb6Hg-cEuC~zRvYd-uCG8gv5WHp5zi9FcVPKWG9X0MNvpXYoG1R1K9U0CiQE1IvSs03ribBa8sKG7~wk4t5ZYoZtKybnkYmhnlZvUDQxqh2Tj66lZIJ4jk6x8sGSMazvNUzWp4tR1PNHpBVyYrRJXmSdb07HpARrsvKSuc1Mn5zQ4mpeSA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Creative",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-01-21",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "a498f498-a021-7054-475b-652c983b58bd",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Daisy, I’m 22 years old, and I’m a responsible, caring, and energetic person who truly loves being around children. I believe childcare is not just about supervision — it’s about connection, guidance, and creating a safe and loving environment where kids can grow and feel supported.\nI’m organized, patient, and mature, but also playful and creative. I enjoy engaging in activities, encouraging learning, and being a positive role model in children’s lives.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-21T15:01:40.192Z",
            "score": 64,
            "opportunityId": "006R700000ZuIKhIAN",
            "auPairName": "Daisy",
            "id": "a498f498-a021-7054-475b-652c983b58bd",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T08:54:56.617Z",
            "lastAppLoginDate": "2026-04-28T08:54:56.612Z",
            "spotlightedReason": null,
            "approvedIQHours": 502.9,
            "profilePictureKey": "protected/a498f498-a021-7054-475b-652c983b58bd/b70ff31a-6f85-4cc3-a4b1-199a54eeae70.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2306700",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4232.9,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-01-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Badminton",
                "Cycling",
                "Swimming",
                "Table tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Makeup",
                "Photography",
                "Writing"
            ],
            "sfId": "001R700000fkNtHIAU",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a498f498-a021-7054-475b-652c983b58bd/b70ff31a-6f85-4cc3-a4b1-199a54eeae70.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNDk4ZjQ5OC1hMDIxLTcwNTQtNDc1Yi02NTJjOTgzYjU4YmQvYjcwZmYzMWEtNmY4NS00Y2MzLWE0YjEtMTk5YTU0ZWVhZTcwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=VZxeMpNd7F1tFkIc3wwRx5iQkhat~RlucfiAEZSXXqtQHyHIaz4fmWbxn88kXQwsUIt9Fj0IDWrGi1N62nSadc2Q58kVoKEEB6XsSz-8IfDs9D2MYL-Bz8QGUMs7OwviBDff7tIr~XgtdzMDtY2ulejZHH3SBjwU~G3zPLjYx8TLqt1dEayqlYUQnarn9k17NGSq6NKk8QwNvay7lWan5TFUzHkW6E93NWTM~Hndm8PkejZzOLxA48kVd6QMj3LLmV6HtWd2qQ8QZpIx1oyVRKRRf4VC8kY1Trf-pncbLg4u-75UPeFbqf4W7CPRApR1SlOEsgi2JCqf4iz7Fq03QA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-03-14",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "b4a81498-d0c1-703a-b98d-620e546d65ae",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I truly enjoy studying and learning new things, because gaining knowledge is very important to me. I love helping children with homework and educational activities in a patient and supportive way. I also enjoy playing games, encouraging creativity, and building meaningful connections with kids. I believe childhood should balance learning and fun. I would love to share Brazilian traditions and create a safe, caring, and positive environment where children feel happy, confident, and supported.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-14T22:00:54.120Z",
            "score": 64,
            "opportunityId": "006R700000f08MWIAY",
            "auPairName": "Isabelly",
            "id": "b4a81498-d0c1-703a-b98d-620e546d65ae",
            "relaxingInterests": [
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T00:50:13.078Z",
            "lastAppLoginDate": "2026-04-28T13:27:07.688Z",
            "spotlightedReason": null,
            "approvedIQHours": 3450.65,
            "profilePictureKey": "protected/b4a81498-d0c1-703a-b98d-620e546d65ae/9694335b-2770-4f6d-960b-7f5ed9565259.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2273542",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4513.45,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-07-28",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Running",
                "Swimming",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000laeGnIAI",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/b4a81498-d0c1-703a-b98d-620e546d65ae/9694335b-2770-4f6d-960b-7f5ed9565259.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9iNGE4MTQ5OC1kMGMxLTcwM2EtYjk4ZC02MjBlNTQ2ZDY1YWUvOTY5NDMzNWItMjc3MC00ZjZkLTk2MGItN2Y1ZWQ5NTY1MjU5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=UdTKVPiKHhX74XecN3WiLVW7isMhdJ1-u8Sb7-BTV826OzQyTsD2ZEpfxieO22mQv-DerHgV~fHxmSVG6Tl~ji8JCm21at~I~7UpIXqpdY-jpLlUpaf8TwOWKSgGhjUsZEf43jWGqoAIIwVpPhAxq4NQlrpKVQcDwkkk34b3-1NxMy2eVRKMUMkcjFnymBS8RoG6PA452OTQT-Mtkdmk5oISBQIX7kZDj8HiYGWwyzYnvRljYA~iLqwIivIejollaJ1Jjldrb~ND0iVPXVq7uAZGnCjnhDSiSywxYVJ3g1UlL9MLzN6gGotLk2RWfgwJViXEocGUWBPQLAPcLl4e4w__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Funny",
                "Independent",
                "Organized",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-04-09",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "c47854a8-f091-7081-0e99-73edcefa271b",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Fernanda.  I am from Colombia and a I live in Tunja, Boyaca. I am a calm and friendly person. At first I can be a little shy, but I like learning and improving. I enjoy working with children and helping them feel safe and understood. When a child has a tantrum, I stay calm and talk to them. I like drawing, painting, and playing. I also enjoy going to the park and playing sports. I am responsible, patient, and I always do my best.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-09T14:04:33.275Z",
            "score": 64,
            "opportunityId": "006R700000E34rYIAR",
            "auPairName": "Fernanda",
            "id": "c47854a8-f091-7081-0e99-73edcefa271b",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Journaling"
            ],
            "updatedAt": "2026-04-28T23:58:45.748Z",
            "lastAppLoginDate": "2026-04-28T23:58:45.743Z",
            "spotlightedReason": null,
            "approvedIQHours": 989.95,
            "profilePictureKey": "protected/c47854a8-f091-7081-0e99-73edcefa271b/2bff4cb8-7695-4336-b859-3c65d7a25a88.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL14325014",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2954.25,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2000-05-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Dancing",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Crafts",
                "Drawing",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000EN5yOIAT",
            "totalNumberOfChats": 9,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c47854a8-f091-7081-0e99-73edcefa271b/2bff4cb8-7695-4336-b859-3c65d7a25a88.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDc4NTRhOC1mMDkxLTcwODEtMGU5OS03M2VkY2VmYTI3MWIvMmJmZjRjYjgtNzY5NS00MzM2LWI4NTktM2M2NWQ3YTI1YTg4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=fddWbChwgHQvwFjHJrdPdPcZEeUdlTJZ7MQ1xJ0wIjIEkXP1LCxIu~JPVHi02BgpMqYEQBpN3uuZFq5RPSKShnTeU~rQnYV49f774-WSGAYhAUmZBmaPJuRY3qHb-b~8Mb1sOVw-hedV~dpNxGL31GCeYgH00hewRKRgZdV-bwEHUccaDpHDrvNYL1QGP1ZHhW2ZCHgSasJ9IV8Ryd6D~BqxYO2RHizptGdVHsBp2YGZBBrhwx0gBmRFjEzBmD~LrS3mCVD8Qj4adJYEDxqIASgkW8NoZFzNEOIojMVWuoA-33i3DJbQyhGZ1szAVWRK3K9L1j7ixapZoSTVDPD3Ug__"
        },
        {
            "personalityTraits": [
                "Assertive",
                "Athletic",
                "Calm",
                "Creative"
            ],
            "matchingStartDate": "2026-03-27",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "c4989458-20c1-70e7-f158-c13c6d317609",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Dear host family, my name is Hemilly, I'm 24 years old, I'm from Rio Real Bahia, but I've been living in Salvador with my family for almost 20 years.\nI am naturally in love with children, I have 9-year-old twin sisters that I have helped raise since they were little.\nI am in love with American culture and my goal with the Au Pair is to learn a new language, to be able to study at an American university and live with a welcoming family, that I can give all my dedication and all my love for kids.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-27T14:56:18.686Z",
            "score": 64,
            "opportunityId": "006R700000DuuHaIAJ",
            "auPairName": "Hemilly Victória",
            "id": "c4989458-20c1-70e7-f158-c13c6d317609",
            "relaxingInterests": [
                "Gardening",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:01:18.340Z",
            "lastAppLoginDate": "2026-04-29T01:01:18.336Z",
            "spotlightedReason": null,
            "approvedIQHours": 390.72,
            "profilePictureKey": "protected/c4989458-20c1-70e7-f158-c13c6d317609/d398639e-46af-454d-b430-b89d83b8aec4.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA13511648",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 390.72,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-02-28",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-08-07",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Running"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Graphic design",
                "Makeup",
                "Musical instruments"
            ],
            "sfId": "001R700000EH2sIIAT",
            "totalNumberOfChats": 20,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c4989458-20c1-70e7-f158-c13c6d317609/d398639e-46af-454d-b430-b89d83b8aec4.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDk4OTQ1OC0yMGMxLTcwZTctZjE1OC1jMTNjNmQzMTc2MDkvZDM5ODYzOWUtNDZhZi00NTRkLWI0MzAtYjg5ZDgzYjhhZWM0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=dmf2dGMzwRLv3E-bRtWOIK3qRux-Nt6FeW0ypTRSmzeHi3Naumkm8UO5zuR1XdlqMFtnCz9qq4QdNn8hMy8B2TuETUCvL73ys754cqjwl8oEFZigrXC3moozDRQERevnQJ3AJ1Yl6AMf1uPZqhNJHhfPHlqSTm41rhOXQ1~txInEn7J2lfN-mzmyXeJFxLeyj3LQWL8YijBQp36-NzQbCM10Use-5LCEkKY3blnJ9uvVJVrse-I-4FdIkd8uPLXTtsusZfTkpCvnZ2LhE2AhfdRsUbe~gK2AEQWJRgEKBXwZL~VWiwyWQSwZT274AEoMIcx2aXwi8oAZ-x2iPmx3Fg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Athletic",
                "Calm",
                "Cheerful",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-02-20",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "d4189478-b061-70b0-1779-ebd923ec2aab",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I’m Viola, i live in Italy, near Venice. I live with my mom and my younger sister who’s 17 y/o.  \nI love traveling a lot to see as many places as possible and learn new things, I enjoy immersing myself in other cultures. I’am very empathetic.\nI love sports, the last one I did was artistic gymnastics. I enjoy cooking, and I adore board games. I also like staying with kids because they make me smile.\nI like going out with my friends to the cinema or dancing. I tend to surround with people.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-20T17:01:32.621Z",
            "score": 64,
            "opportunityId": "006R700000eDelOIAS",
            "auPairName": "Viola",
            "id": "d4189478-b061-70b0-1779-ebd923ec2aab",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-27T11:25:42.662Z",
            "lastAppLoginDate": "2026-04-27T11:24:26.410Z",
            "spotlightedReason": null,
            "approvedIQHours": 248.7,
            "profilePictureKey": "protected/d4189478-b061-70b0-1779-ebd923ec2aab/46698674-cc7f-482e-9316-151ab1561449.png",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2361367",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4285.95,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Italian",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2004-05-20",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Basketball",
                "Dancing",
                "Gymnastics",
                "Roller skating",
                "Soccer",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000kgcRUIAY",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d4189478-b061-70b0-1779-ebd923ec2aab/46698674-cc7f-482e-9316-151ab1561449.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDE4OTQ3OC1iMDYxLTcwYjAtMTc3OS1lYmQ5MjNlYzJhYWIvNDY2OTg2NzQtY2M3Zi00ODJlLTkzMTYtMTUxYWIxNTYxNDQ5LnBuZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=YRgJ5sQeC-mXC2fI3SAYOe838vgJe0vFlHfZ7pI3~Z13WvzJCBa-YQpIEyBtD9N4LOi~bZlduAxTfMoAc5xO6Xj0mp5fFToxVccFm7i3YTwPJO~fL1Y591-dSRdF1hhUP3~wjo92vk6rq1r0j4qN1phJEW4faY7dwJA89-IW9IhfJrXge8i4dNdTdckeI6UdjlWcPpAJUMOYWI2SRmN0JLNgP8NMUYFVNd~r7x1dPGF1MyEUhKH8nDy-eegd5oaYoth8-j6~o4VR0DLiSkvT-zKjsC3LnU0WhpfxUzQKYCksxAopHxz2nZoJ-~24W9rVt7LANNmWWo6OUMLaaI56wg__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "d4987458-2061-704f-840d-90061bba7517",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a loving, kind, and deeply empathetic person with a genuine passion for childcare. My priority is to create a safe, fun, and nurturing environment where children can grow and thrive. I am caring and dedicated to every aspect of care, ensuring the well-being and happiness of the little ones.\nMy gentle approach allows me to interact with children with tenderness and understanding, establishing a bond of trust and respect. I am also patient, responsible, and proactive.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-17T14:16:59.261Z",
            "score": 64,
            "opportunityId": "006R700000gAH94IAG",
            "auPairName": "Laura",
            "id": "d4987458-2061-704f-840d-90061bba7517",
            "relaxingInterests": [
                "Journaling",
                "Meditation",
                "Walking"
            ],
            "updatedAt": "2026-04-29T03:22:09.054Z",
            "lastAppLoginDate": "2026-04-29T03:22:09.049Z",
            "spotlightedReason": null,
            "approvedIQHours": 2462.8,
            "profilePictureKey": "protected/d4987458-2061-704f-840d-90061bba7517/f9588a8d-c2fc-4528-a546-05c787bdbe61.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2216002",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2462.8,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2002-12-01",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Drawing",
                "Singing"
            ],
            "sfId": "001R700000msvSJIAY",
            "totalNumberOfChats": 3,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d4987458-2061-704f-840d-90061bba7517/f9588a8d-c2fc-4528-a546-05c787bdbe61.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDk4NzQ1OC0yMDYxLTcwNGYtODQwZC05MDA2MWJiYTc1MTcvZjk1ODhhOGQtYzJmYy00NTI4LWE1NDYtMDVjNzg3YmRiZTYxLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=NeR-mWCIKbKQj6CyCYeULsHsbPpP-Xm11-dZOo6vos7UddY1jZ3XChonG6TuFTwWsr8owr~rfJE3h426HXCKywcuDO8E3JpncSmp8z~gHl1D53mYXccGbmUWlgIZWmuj-LgUsNyFYJ3bsQ1Sun5dmsxRaA9m6OGm8Gq5e5Yfi1fCSuLQkohyb95UTLwXaL964eSCB~9EcBAeh0AA7dpzzjzBT94cV7vnQO5i522MWraMT6FOeIVb6lmqzdvyZmM547cyQ2suuoO4QW2ZDAcqW3AAFz~HoD-e~ixiCi7Gu3appnikyyzBcWsExeOUFBIy46qEJTSgvuhoUU3Bh1MemA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2026-01-17",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "d49894f8-40e1-7098-18fb-3b3627cd194e",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Alejandra and I will turn 21 on February 22. I am an active, dynamic, responsible, and organized person with a positive energy that reflects in everything I do. I am reliable, detail oriented, and I enjoy keeping spaces clean and structured. I live with an open heart, love sports for the balance they teach, respect animals deeply, and enjoy sharing love, learning, and positive energy with children and everyone around me. with kindness patience, commitment, and a constant desire to gro",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-17T16:00:55.441Z",
            "score": 64,
            "opportunityId": "006R700000MrrvyIAB",
            "auPairName": "Stephany Alejandra",
            "id": "d49894f8-40e1-7098-18fb-3b3627cd194e",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gardening",
                "Journaling"
            ],
            "updatedAt": "2026-04-28T18:58:53.182Z",
            "lastAppLoginDate": "2026-04-28T04:14:23.667Z",
            "spotlightedReason": null,
            "approvedIQHours": 440,
            "profilePictureKey": "protected/d49894f8-40e1-7098-18fb-3b3627cd194e/7bd7f440-fb0d-4968-9e39-640cedf3e3ad.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2111913",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years",
                "All ages"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6311.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2005-02-22",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Badminton",
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Baking",
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000P6U0DIAV",
            "totalNumberOfChats": 26,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d49894f8-40e1-7098-18fb-3b3627cd194e/7bd7f440-fb0d-4968-9e39-640cedf3e3ad.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDk4OTRmOC00MGUxLTcwOTgtMThmYi0zYjM2MjdjZDE5NGUvN2JkN2Y0NDAtZmIwZC00OTY4LTllMzktNjQwY2VkZjNlM2FkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=LuBjKJfUfpIVmSNc0~8u0GU4m18nJHfZokp5qIXxJfxgEY6oqRg0AnexI1gbKy6eVyd3kPtuikBvyAFAzESSZ1fprnaJsCapIYE-rLuLf~rq3zu0T2GVFzdWiY~Zmhkt894l6nNHkXsg1IMhqasAMr4iclJad~6XjT0RVXliSUTYC90ORz40tlFLpy1cUBf1MTTVfOVRKfyPQcpEXoZFRg9DbegzjTgfZwk8EoEIuUfnbFzJaVSZ8SqZZgeBuJfQadWpKXW2tuaVrgDzzOoH6GEmW~vwhNnwS0yBjN31bHGZ44LGij5TcbkJ4TeSUyXBy~4xSfVb2~j3KmgAFMc~6g__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Creative",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-14",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [],
            "loginId": "d4a84468-b071-70da-6d90-031762161731",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I'm Karen. I live in Cali and I'm a psychologist with a certificate in Early Childhood Education. I'm 22 years old and I enjoy rollerblading. I love cats and I have two of my own. I love working with children and I know how to adapt activities and games to support their learning. People describe me as outgoing, charismatic, affectionate, and kind.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-14T21:27:50.316Z",
            "score": 64,
            "opportunityId": "006R700000fuoAfIAI",
            "auPairName": "Karen Tatiana",
            "id": "d4a84468-b071-70da-6d90-031762161731",
            "relaxingInterests": [
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T22:43:38.413Z",
            "lastAppLoginDate": "2026-04-28T22:43:38.408Z",
            "spotlightedReason": null,
            "approvedIQHours": 1661.76,
            "profilePictureKey": "protected/d4a84468-b071-70da-6d90-031762161731/20b01640-0de0-46cb-86bf-6afe8e2be53c.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2377804",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5801.12,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-04-19",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-11-20",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Gymnastics",
                "Roller skating"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Crafts",
                "Social media"
            ],
            "sfId": "001R700000mbgO8IAI",
            "totalNumberOfChats": 1,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d4a84468-b071-70da-6d90-031762161731/20b01640-0de0-46cb-86bf-6afe8e2be53c.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNGE4NDQ2OC1iMDcxLTcwZGEtNmQ5MC0wMzE3NjIxNjE3MzEvMjBiMDE2NDAtMGRlMC00NmNiLTg2YmYtNmFmZThlMmJlNTNjLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=AzdDFjygaoJqUctXgdkpuzzggMVhKqlvjJr0ykSAc7GOQ9bNdiZSDK9ADpmXuY1w5GDBtOEi6Xo-ZSIJ458e0zEkyFdeNN9xkOHQGklQDuClpLTSHSl4D~mFOCRt3Q~nAj~dUGlisebjNZDH3Az~JfpUNmChJHUUeKZORP9~mRghV9kMIeBKq9-efyyQfXx0oyHsmzl8o0cdfIsMz5mMapDz1NwfAkk2efvjnK6EPSI-dSZDYHeduybKa02GBqS0rfx~tM7PAJP5iDigz~VS5-~sqDJVzcg99zPmLbVEIXDbre16rFB7ezSCcrLP5DSDZVGFcjqXIvjC2zhP-zWP6A__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Funny",
                "Organized"
            ],
            "matchingStartDate": "2026-04-14",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "f4284448-3081-70bd-1985-dd943d17b3a8",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello! I am a caring, responsible, and positive person who enjoys spending time with children. I love activities like drawing, reading, playing games, and outdoor walks, which I can share with your kids. Family is very important to me, and I value respect, kindness, and communication. What makes me different is my patience, creativity, and genuine love for helping children learn and feel happy.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-14T14:37:44.702Z",
            "score": 64,
            "opportunityId": "006R700000fdd3WIAQ",
            "auPairName": "Alejandra",
            "id": "f4284448-3081-70bd-1985-dd943d17b3a8",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T02:09:38.629Z",
            "lastAppLoginDate": "2026-04-29T02:09:38.625Z",
            "spotlightedReason": null,
            "approvedIQHours": 2450,
            "profilePictureKey": "protected/f4284448-3081-70bd-1985-dd943d17b3a8/6e61464a-1f46-45a8-afa9-85b71c2c6255.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2376304",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2450,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-12-20",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Crafts",
                "Drawing",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000mHoXsIAK",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4284448-3081-70bd-1985-dd943d17b3a8/6e61464a-1f46-45a8-afa9-85b71c2c6255.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNDI4NDQ0OC0zMDgxLTcwYmQtMTk4NS1kZDk0M2QxN2IzYTgvNmU2MTQ2NGEtMWY0Ni00NWE4LWFmYTktODViNzFjMmM2MjU1LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Hkf6NtJhNtaY0Fa64V4eeFih4YlfMHYQmEgF4qGuSd28FY26ix6JOxM6-zTEJFbmXpi7GLyKkTGfo7AahPvAYMVbe9vNNu997x~LhI-etSaLXZZVAlpUPsPR1LIpQ3cDfdMmDpUd~-9WNsDyoZfS6TM6tWHIbDb7lxttXZgQynEMMyWuqlHTs4QyhdIBnB1nSn6ObJsD6cilm8k5vurD0TNDH3iYxscefY~HiSlyOGJm~iAjP7bpqYc4BLSdmSGwdboOERNs3mCxWpOTqrVDky3H1Cobd~2YvSBO8cfd1yMX4FNYjJMbUFEehut4FSgbiKiap6sgWHqHALaIT7QSGA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic"
            ],
            "matchingStartDate": "2026-03-07",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "f4680498-00d1-70a0-1161-8d51496ccb2c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello family, my name is Juliana, I am 20 years old, and I live in the city of Medellin, Colombia. I live with my mom, my sister, and my dog Chanel. I have a degree in comprehensive early childhood care and have extensive experience caring for children from 0 to 6 years old. I am very loving and still have a childlike spirit, so I enjoy playing with children. In my free time, I love to dance, sing, read, and travel, and my favorite food is sushi.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-07T00:01:59.023Z",
            "score": 64,
            "opportunityId": "006R700000Lw53FIAR",
            "auPairName": "Nana",
            "id": "f4680498-00d1-70a0-1161-8d51496ccb2c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming"
            ],
            "updatedAt": "2026-04-29T01:34:26.396Z",
            "lastAppLoginDate": "2026-04-29T01:34:26.392Z",
            "spotlightedReason": null,
            "approvedIQHours": 1446.45,
            "profilePictureKey": "protected/f4680498-00d1-70a0-1161-8d51496ccb2c/fd099ef8-32fd-4d6b-9f73-c8a5028a5f58.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL14432590",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2620.8,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2005-02-08",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Makeup"
            ],
            "sfId": "001R700000F2zTFIAZ",
            "totalNumberOfChats": 34,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4680498-00d1-70a0-1161-8d51496ccb2c/fd099ef8-32fd-4d6b-9f73-c8a5028a5f58.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNDY4MDQ5OC0wMGQxLTcwYTAtMTE2MS04ZDUxNDk2Y2NiMmMvZmQwOTllZjgtMzJmZC00ZDZiLTlmNzMtYzhhNTAyOGE1ZjU4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=V5Cc9UUAcovw4G59S8JRgdrODXzPvUq6Z4eQPySthz8SIz29QcwKib1B0vS6nSBXhOghmpliZhrkaaD3svBn5fiW-a5VxKzbGJl77W~d3j0DwXValjtNHlMQS~JD0U5iszpQLt1G3qjbW0sH3zqEWZYyR2smpGUV-AerVBzURFtALXIPcyqdgzagLikEkxv2HE63QehKNZQLcxI62Q58sIgWWrCkwLOPD~qzxRF3vp9OWCwpNZq46wzh0d-yVqugvnIEZNQGmX09OUd9HgACiu05nuy3m8JdzskmONocVlUb1pK7HVYrqH4VJbC~bsG8dNHlW7MqGFy7nkQz6NN8vA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Creative",
                "Empathetic",
                "Funny",
                "Proactive"
            ],
            "matchingStartDate": "2026-04-15",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "f48854d8-60c1-7009-4d48-dc214f073633",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello dear Host Family! My name is Laura Galvis. I am a very family-oriented person, empathetic and friendly. I really enjoy talking with people and listening to them. I love spending time with children and creating dynamic activities that allow them to learn while having fun. I believe that creativity and interaction help children feel happy and confident. I also enjoy sharing special moments with my family and friends, such as traveling, discovering new places and learning new things.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-15T17:57:44.144Z",
            "score": 64,
            "opportunityId": "006R700000fyuNuIAI",
            "auPairName": "Laura",
            "id": "f48854d8-60c1-7009-4d48-dc214f073633",
            "relaxingInterests": [
                "Camping",
                "Movies",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:07:05.237Z",
            "lastAppLoginDate": "2026-04-29T01:07:05.212Z",
            "spotlightedReason": null,
            "approvedIQHours": 822.8,
            "profilePictureKey": "protected/f48854d8-60c1-7009-4d48-dc214f073633/6a2060fe-a9a9-4022-ac59-ff7be2da1bef.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2379585",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1862.05,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-12-13",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Graphic design",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000mgT0LIAU",
            "totalNumberOfChats": 7,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f48854d8-60c1-7009-4d48-dc214f073633/6a2060fe-a9a9-4022-ac59-ff7be2da1bef.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNDg4NTRkOC02MGMxLTcwMDktNGQ0OC1kYzIxNGYwNzM2MzMvNmEyMDYwZmUtYTlhOS00MDIyLWFjNTktZmY3YmUyZGExYmVmLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=fO01dKdfIMnn8LlLUD51~Rjaqfr4a90W7KB56pEmovFCjTRgdLL9q3SbdfmTylYxnbUgXrnr68DvZ-GdLWUF2r3kk1cB6XONsW6PlFXMTMTWuP~eRHsXNMBoWDDtKtgLgYuPTVaqypLpX-VKUbxt~-SGMS75o~ceeS7U~~ThYrRYr0DUmyhD5fH~9hh-mfTD7Z492xNi~ejWX5kF2Ys1fm2T3huom8tJCYo0CgAjg-IYixX-kaButSrDw6beNfVn-Unn7I00EbG5A-2ntI3IUVEHr~xO27BOyHd3whwyRslZ4TfvI6sKnz0FC0t~-kP5HqVfFJ9HdsT3YHKXJ~7kLg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "04b8d4c8-10e1-7049-c992-8a0363a628d8",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Milagros. I’m from Argentina.I’m caring,responsible and positive person who truly enjoys spending time with children. I have experience with kids of different ages, especially my nephews,helping with daily rountines,playing and organizing fun activities. I enjoy going to the park, doing crafts,reading books and creating a safe and happy environment for kids. In my free time I like spending time with my family,going to the gym,walking around places near my home with my friends",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-14T18:53:14.050Z",
            "score": 0,
            "opportunityId": "006R700000E4tqaIAB",
            "auPairName": "Mili",
            "id": "04b8d4c8-10e1-7049-c992-8a0363a628d8",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gardening",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T00:55:08.116Z",
            "lastAppLoginDate": "2026-04-29T00:55:08.112Z",
            "spotlightedReason": null,
            "approvedIQHours": 640,
            "profilePictureKey": "protected/04b8d4c8-10e1-7049-c992-8a0363a628d8/088cc40d-f0a3-4cd4-aad3-2842e94dbac5.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "AR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ARG14239429",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2440,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-03-26",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000EHsBcIAL",
            "totalNumberOfChats": 26,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/04b8d4c8-10e1-7049-c992-8a0363a628d8/088cc40d-f0a3-4cd4-aad3-2842e94dbac5.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNGI4ZDRjOC0xMGUxLTcwNDktYzk5Mi04YTAzNjNhNjI4ZDgvMDg4Y2M0MGQtZjBhMy00Y2Q0LWFhZDMtMjg0MmU5NGRiYWM1LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gkuw9JFSu4nEoh9wq8Is1MVY5Vvc193vlEQwL-IyiJ5rXctrX7jkP~Cm5WYKquG8x9WaN3coSM0C9ohoHK9Cy75xF4cLR7M8AKrKxOvxvUGHW5pmZ28ANw5prkFoaH3gjKCzLec99-qnHTHX~p8G34pqGku-3u0LBEVJorZR8SGyATojiDCFNVZFDLWZDG13wwZNfzmGysrGJOwhuwnoc4G0K3oOqbP-Q1grui2yTHwn9C9r63IFCBWxRS9kOftpfu7p13H0YjyJ-ja1dAVstpuDluTNHOXQZ~IKT30SVYh4bfFfPMA9jVYIP7crKRDzxo-4ZnQuAUlQNmcOGznROA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Laid-back",
                "Organized",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-10-23",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "34286448-c0e1-70d9-0fe3-dbae494f488c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a responsible, empathetic, and respectful person. Many people describe me as kind, with a calm and warm personality. I am characterized by doing things with dedication and commitment, always aiming to give my best. I value details and try to act with honesty and respect.\nI enjoy spending time with family, discovering new places, dancing, and having experiences that help me grow.\nI am looking for a loving, kind, and respectful family with whom I can build a positive experience for both side.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2025-10-29T21:56:13.025Z",
            "score": 0,
            "opportunityId": "006R700000WZAoTIAX",
            "auPairName": "Mapis",
            "id": "34286448-c0e1-70d9-0fe3-dbae494f488c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Movies",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-28T21:31:49.733Z",
            "lastAppLoginDate": "2026-04-28T21:31:49.729Z",
            "spotlightedReason": null,
            "approvedIQHours": 1500,
            "profilePictureKey": "protected/34286448-c0e1-70d9-0fe3-dbae494f488c/bba8e6a7-5563-4d00-a5ad-7aad3be383a2.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2268173",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1734,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-10-20",
            "preferredPets": [
                "Cats",
                "Dogs",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Dancing",
                "Roller skating",
                "Soccer",
                "Tennis"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Crafts",
                "Drawing",
                "Makeup",
                "Photography",
                "Singing",
                "Social media"
            ],
            "sfId": "001R700000beUy9IAE",
            "totalNumberOfChats": 57,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34286448-c0e1-70d9-0fe3-dbae494f488c/bba8e6a7-5563-4d00-a5ad-7aad3be383a2.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNDI4NjQ0OC1jMGUxLTcwZDktMGZlMy1kYmFlNDk0ZjQ4OGMvYmJhOGU2YTctNTU2My00ZDAwLWE1YWQtN2FhZDNiZTM4M2EyLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=W3PFVc37pWHEmuB2bVYzg6kQbNXzzGnAhF7Z~q~KxNFhsuoHpTUXzOc25CvX1ED~mWkSvX9LgQf0U3ZWsYU03wo1o8Sq72h7plF6eGT-i0YCSxWR548UiEjJk6GCZKKHqJg4Wjsyh4IIO3BQJX0OfWsQ3rMLnGHa22R6jZj8t4JBGMi37yxfDWaKt9PqDJxka92klXASjJB8hVClAaPSWpbtvBQJ8aD8bdLVEtpLgqFInZnHU2Oo8st2yCidTJqJZBx4VzZM~V10obV1WuJIIkMYtJEbo1qsrDX4Sd1z333j9x98rRT4aBHw3txgOOtz70lyhbnj1GtD0dQ~Ve7tXw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2025-06-11",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "54587468-8011-7015-51cb-137dfc856468",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, dear host family!\nMy name is Laysla, I’m 21 years old and I’m from Brazil. I’m currently studying Pedagogy because I’ve always been passionate about children’s development and education.\nI consider myself a calm, responsible and caring person. I love creating a safe, affectionate and fun environment for children. I also enjoy music, movies, cooking and outdoor activities.\nBecoming an au pair is an important step for me, not only to care for children, but also to grow personally.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2025-09-16T22:17:21.473Z",
            "score": 0,
            "opportunityId": "006R700000LdQeUIAV",
            "auPairName": "Laysla",
            "id": "54587468-8011-7015-51cb-137dfc856468",
            "relaxingInterests": [
                "Board games",
                "Gaming",
                "Journaling"
            ],
            "updatedAt": "2026-04-28T15:46:25.892Z",
            "lastAppLoginDate": "2026-04-28T15:46:25.886Z",
            "spotlightedReason": null,
            "approvedIQHours": 773.55,
            "profilePictureKey": "protected/54587468-8011-7015-51cb-137dfc856468/ed35d19a-2b1f-4943-a5bd-916c49cfb615.png",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA14174272",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1116.35,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2005-03-02",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-11-20",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Cooking",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000EDrKrIAL",
            "totalNumberOfChats": 32,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/54587468-8011-7015-51cb-137dfc856468/ed35d19a-2b1f-4943-a5bd-916c49cfb615.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDU4NzQ2OC04MDExLTcwMTUtNTFjYi0xMzdkZmM4NTY0NjgvZWQzNWQxOWEtMmIxZi00OTQzLWE1YmQtOTE2YzQ5Y2ZiNjE1LnBuZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=BUpXgu2X9KZ6x1gMEjFQJFh4gxe5f1AaFMfidedvolWHX05Tu06G0uSB8AsRcwsV8aWnnVUgj5EmVXwrj3wGr4veXA23bNYgbOn3QRq-gC1K0XYQ2cK6CvCG5sx5X2WKjVZx-UZy4aW18--xR9Y0LB2509JkxCjQCDY-TQDj4-1C8tgvMuICBYvARazQ4uqzVTPNg0lIraDClTRTP3YAghxXmqf-WZ1Sp0dTb~Ti8vCWSxbxvY8280SbU57PrlqP6YQ8Y6I9QpreetfN5NHjK2BbeXJWFBZLrP8ij-CCFD4zqgakBbz-OlqK6BPRH0ESZkUpCsh7qqF4rN6Ant-Wmg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-01-23",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [],
            "loginId": "742834c8-a0c1-70b5-e3c4-bfb846d6a720",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Vanessa, I am 23 years old and I am from Medellín, Colombia. I am the oldest of six siblings, so caring for children has always come naturally to me. From a young age, I have helped take care of my brothers, cousins, and nephews, supporting them with daily routines such as bathing, preparing meals, and keeping their spaces clean and organized.\nGrowing up as the oldest has taught me to be responsible, patient, and attentive to children's needs. I truly enjoy spending time with kids,",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-06T14:39:49.552Z",
            "score": 0,
            "opportunityId": "006R700000YgPmPIAV",
            "auPairName": "Vane",
            "id": "742834c8-a0c1-70b5-e3c4-bfb846d6a720",
            "relaxingInterests": [
                "Card games",
                "Gardening",
                "Journaling"
            ],
            "updatedAt": "2026-04-29T02:17:43.280Z",
            "lastAppLoginDate": "2026-04-29T02:17:43.272Z",
            "spotlightedReason": null,
            "approvedIQHours": 1953.5,
            "profilePictureKey": "protected/742834c8-a0c1-70b5-e3c4-bfb846d6a720/bd76c7fe-9503-47d6-82e2-fae02db514e7.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2289323",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 10180.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "Other",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-03-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Baseball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup"
            ],
            "sfId": "001R700000eH2ZRIA0",
            "totalNumberOfChats": 27,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/742834c8-a0c1-70b5-e3c4-bfb846d6a720/bd76c7fe-9503-47d6-82e2-fae02db514e7.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NDI4MzRjOC1hMGMxLTcwYjUtZTNjNC1iZmI4NDZkNmE3MjAvYmQ3NmM3ZmUtOTUwMy00N2Q2LTgyZTItZmFlMDJkYjUxNGU3LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=W-BNvGmrbz7WNuOFOiqcFftmGzHuHEGejjRqst80Vu7gQj-1WrUCuUwuN31Xs~FwoVj6SmKWQ000bnsB8vcFkBtzWbdppeldSCwQZ1cH4M0LugkakrhtzMbu-HJmglb0DMbCLD~HA1Vif3vLiiCpZ1CztqDXuyq0yeiZje3zq296H8DQ5F3ePCALG9SxsA9Sibz74XtBOqnWneKqxIx4zL566ziZFeam11Ce9L2jcVsQLEj-1p3cegl3kHb~SPqfJrZ9AOeqDAgQ~oP-vDfAjvUc386Gx-YZJnTauLwzno4PNd3UONRGGM3V2sSttKIxYngKlYIuNcLJrAM1~a1EUg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Empathetic",
                "Funny",
                "Independent",
                "Organized",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-06-05",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "84c88458-5071-7060-550f-9a87d6618d65",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I’m Maria (Denise), 26, from Italy. I’ve been living in Australia for 1 year. I love traveling and cooking, especially baking desserts for my family and friends. I’m passionate about nature, especially the sea, and enjoy relaxing at the beach. I speak Italian, Spanish, and am working on my English. I’m a respectful, tidy and responsible person. I enjoy sharing my Italian culture and language with children, and I’d love to learn about your traditions and become part of your family.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-03T17:42:08.397Z",
            "score": 0,
            "opportunityId": "006R700000E0q3BIAR",
            "auPairName": "Denise",
            "id": "84c88458-5071-7060-550f-9a87d6618d65",
            "relaxingInterests": [
                "Camping",
                "Movies",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:06:10.659Z",
            "lastAppLoginDate": "2026-04-27T19:41:13.222Z",
            "spotlightedReason": null,
            "approvedIQHours": 1050,
            "profilePictureKey": "protected/84c88458-5071-7060-550f-9a87d6618d65/936ed4b9-9b69-4e8c-99db-f8233a1e8688.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "ITA13697225",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years",
                "All ages"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3144.8,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Italian",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "4+ children"
            ],
            "dateOfBirth": "1999-08-24",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Atheist",
            "statePreference": null,
            "latestTravelDate": "2026-08-21",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Musical instruments",
                "Photography",
                "Theater"
            ],
            "sfId": "001R700000EMoeaIAD",
            "totalNumberOfChats": 44,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84c88458-5071-7060-550f-9a87d6618d65/936ed4b9-9b69-4e8c-99db-f8233a1e8688.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NGM4ODQ1OC01MDcxLTcwNjAtNTUwZi05YTg3ZDY2MThkNjUvOTM2ZWQ0YjktOWI2OS00ZThjLTk5ZGItZjgyMzNhMWU4Njg4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Ko3PGkHA4EEsFME2kADD~3SBgnEjiqgVNuylIm~0FBvs-y4DgfnmO4~SXny8l1RPeu8bMX9TLF5Gf4sIp1xeO90UwEN9-8hcUxMddNgT2YkXmEo2BtIiLnJumIu0kdFgfkMuCup4V4TfWTGiPxeoCL22zRR-t7CLZLKegIiu99ltjW~L5nBi-mEwjbhTzXFe3mVujnwB4vUizaFl8vEcLnge5lxSvAN0KzHg0k3-RfqTsHj6CIWeFxMkgQSt5W5FzrsnZfzs8TzWWRgB7Is4ZoB8LuggF1kyt6nX4f66lVi0bK1miAoSETPG~g2Y1GgSgSFFdYDGSsc0eTNxVJNDGA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2025-03-13",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "University",
                "High School"
            ],
            "loginId": "d49834c8-9021-70d9-5c40-dd97c4a11bd9",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I'd like to help families who can't look after their children after school, at weekends and during the holidays. I have my BAFA in France, which is the qualification required to work in a leisure centre, and I have been babysitting children since I was 12.  In my spare time I do sport, I've been a handballer for 16 years now. I also love pastriesI have a twin sister, one brother aged 26 and my parents have been divorced for 4 years. I live in two towns by the sea in Brittany.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-07-22T16:17:21.985Z",
            "score": 0,
            "opportunityId": "006R700000Jts86IAB",
            "auPairName": "Flavie",
            "id": "d49834c8-9021-70d9-5c40-dd97c4a11bd9",
            "relaxingInterests": [
                "Camping",
                "Journaling"
            ],
            "updatedAt": "2026-04-29T01:19:50.308Z",
            "lastAppLoginDate": "2026-04-28T17:49:37.789Z",
            "spotlightedReason": null,
            "approvedIQHours": 685.6,
            "profilePictureKey": "protected/d49834c8-9021-70d9-5c40-dd97c4a11bd9/e8d8923a-c06b-48f5-94b3-0275fbf08d64.e88c87e0-b893-4173-8093-0abf0e95418b",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "FR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "FRA2037017",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 1982.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "French"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2003-01-15",
            "preferredPets": [
                "Cats",
                "Dogs",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-04",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Handball",
                "Horseback riding",
                "Running",
                "Skiing",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000LUAylIAH",
            "totalNumberOfChats": 71,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 4,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d49834c8-9021-70d9-5c40-dd97c4a11bd9/e8d8923a-c06b-48f5-94b3-0275fbf08d64.e88c87e0-b893-4173-8093-0abf0e95418b?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDk4MzRjOC05MDIxLTcwZDktNWM0MC1kZDk3YzRhMTFiZDkvZThkODkyM2EtYzA2Yi00OGY1LTk0YjMtMDI3NWZiZjA4ZDY0LmU4OGM4N2UwLWI4OTMtNDE3My04MDkzLTBhYmYwZTk1NDE4YioiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=WG9I7qI1BAZ7qLjXirvd6B2fEEzLdLiuswDmfkim0E61G03mQcxnIsvWpfiHu5rVhccMOK5Q48j7JM2a~2FbK0hN2-Rq2EoJYOMEMGHKZYwjPfHuVGFRvects8JDQfkUIhAN3Xv0-ms766ucoLFmyL824JbPjT6~uOV6qvSmdvB2nQ8gRtO4IRC~v45mDvMq0sOuCeHOBGtFjgeurpuXFHoPDxBtMzP6UsD4uoZi8Dutxd9tfIONemMxBO6JWCvPKTSDFc9QeuqeoktCVeadhyzku7AFh0oxSE7bNwGX5RVyJevGQmZV48i0gIaDdfQjcE8VZV~pon6gpono-fAj8A__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-14",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "04e844b8-c061-70f2-3354-2460e72031fa",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Paula, and I’m a caring, responsible, and cheerful person who truly enjoys spending time with children. I come from a close and loving family, which has taught me the importance of respect, kindness, and communication. I’m patient, creative, and calm, and I always try to create a positive and safe environment for kids.\n\nI enjoy activities like going for walks, doing crafts, playing games, listening to music, and helping with homework or daily routines. I love learning new things a",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-14T20:22:18.764Z",
            "score": 64,
            "opportunityId": "006R700000hYTZtIAO",
            "auPairName": "Camila",
            "id": "04e844b8-c061-70f2-3354-2460e72031fa",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Journaling",
                "Meditation",
                "Movies"
            ],
            "updatedAt": "2026-04-29T02:37:28.425Z",
            "lastAppLoginDate": "2026-04-29T02:37:28.420Z",
            "spotlightedReason": null,
            "approvedIQHours": 425.04,
            "profilePictureKey": "protected/04e844b8-c061-70f2-3354-2460e72031fa/b3996dfd-4143-41e2-b497-913d98411555.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2394356",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6291.36,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-05-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-08-28",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Cooking",
                "Graphic design",
                "Makeup"
            ],
            "sfId": "001R700000oRpUfIAK",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/04e844b8-c061-70f2-3354-2460e72031fa/b3996dfd-4143-41e2-b497-913d98411555.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNGU4NDRiOC1jMDYxLTcwZjItMzM1NC0yNDYwZTcyMDMxZmEvYjM5OTZkZmQtNDE0My00MWUyLWI0OTctOTEzZDk4NDExNTU1LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=ErgT52cRnQShN0kw~9IJeLXIP6OcfnWsqZe2RWnXKF7uC7d715k~ohHOBryspPZNzWkzSwmOcDMmw6NBEmEXkDMqo0KBBF3iRH7TSsPbCm~gginxm8UBtapg9XrHGBPshmW2OCUcxCO12M~8hWod5bJ8svEk6odNzs1qnTdNqcW8jaukQOP23pQm25GFjC8rNw2TsoMzRV9coyzZT2d4yUyITO1z2D3anXmfj9zemSGeYWhAyjIiIQQBpC3XcLMSevi~Bn8VgoFChiYCXq5gyJbzwwdBGTAWdNhQwCIo5O4Sdp-Nt-oifLQp3yHR-TLakNGuEJvNHORosJU6ZNEeEg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-02-05",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "2428c438-8001-7060-d36a-f74a8798bb3c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I’m Martina Pino.\nI see myself as a creative and curious person who is always focused on my goals. I enjoy moving forward, building new things, and surprising myself with what I’m capable of achieving. I’m constantly seeking new ideas, new experiences, and new ways to grow.\nI also enjoy reading, listening to music, watching movies, and doing extraordinary activities that take me out of the ordinary.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-05T16:01:22.900Z",
            "score": 64,
            "opportunityId": "006R700000aI6F7IAK",
            "auPairName": "Martina",
            "id": "2428c438-8001-7060-d36a-f74a8798bb3c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Meditation",
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T15:59:38.198Z",
            "lastAppLoginDate": "2026-04-19T14:23:18.979Z",
            "spotlightedReason": null,
            "approvedIQHours": 518.88,
            "profilePictureKey": "protected/2428c438-8001-7060-d36a-f74a8798bb3c/caa1aaaa-f5a4-47a1-9b6a-49a5eac226df.jpeg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CL",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "CHL2311297",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4343.22,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2002-08-30",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-08-07",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography",
                "Singing",
                "Social media",
                "Writing"
            ],
            "sfId": "001R700000gCbrdIAC",
            "totalNumberOfChats": 25,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/2428c438-8001-7060-d36a-f74a8798bb3c/caa1aaaa-f5a4-47a1-9b6a-49a5eac226df.jpeg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8yNDI4YzQzOC04MDAxLTcwNjAtZDM2YS1mNzRhODc5OGJiM2MvY2FhMWFhYWEtZjVhNC00N2ExLTliNmEtNDlhNWVhYzIyNmRmLmpwZWcqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDU1ODIwfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=LRbUfUXexiyVfvXa8iSbkyJ6jzol7LsyALgdeIPhf2r8aZ7KnMjQRlZIF1LJkCeCCxEN8NKJQiNYk~1Z-E9KtNm2YrAMXRYDhu6wVRQgf-h0zmtxrQI4ya~SEweFMTBwQD2UOQEz6aipOh1Sqj2bpnbJNC-cIU2bXXNJRqFIHa7AbH2YL6pd5WPfJLUf78j3Wh07dc8VGXl3HhCMUq4Yf4YNPGNGG52eTKd70iT5K6ihmp59NiECyFzpva5WKRVmP3nozPftUOVKwYTKiZ~B33obZQno9Gz743T6lYgT7-UJ90~7~x2EJHqzKQVdyALBiPxfIBszz2Iyz8ebxogRSQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic"
            ],
            "matchingStartDate": "2026-02-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "34a8e4b8-6091-70d5-1822-1dcdb23e61e9",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m a positive, responsible, and open-minded person who loves spending time with kids and being part of family life. I enjoy simple activities like playing games, doing creative projects, reading stories, going for walks, and helping with homework. I’m happy to share everyday moments like cooking together, movie nights, or outdoor activities. I’m also curious about new cultures and excited to become part of your family, support your children, and create a warm, fun, and safe environment for them",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-17T15:01:15.393Z",
            "score": 64,
            "opportunityId": "006R700000de3gfIAA",
            "auPairName": "Vittoria",
            "id": "34a8e4b8-6091-70d5-1822-1dcdb23e61e9",
            "relaxingInterests": [
                "Journaling",
                "Movies"
            ],
            "updatedAt": "2026-04-28T17:27:16.470Z",
            "lastAppLoginDate": "2026-04-20T12:53:49.651Z",
            "spotlightedReason": null,
            "approvedIQHours": 880,
            "profilePictureKey": "protected/34a8e4b8-6091-70d5-1822-1dcdb23e61e9/0d79e1b2-6718-432c-b79b-542d8beaa148.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2355254",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3360,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Advanced - Level 6",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Italian",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2003-10-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art"
            ],
            "sfId": "001R700000k0xNOIAY",
            "totalNumberOfChats": 16,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34a8e4b8-6091-70d5-1822-1dcdb23e61e9/0d79e1b2-6718-432c-b79b-542d8beaa148.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGE4ZTRiOC02MDkxLTcwZDUtMTgyMi0xZGNkYjIzZTYxZTkvMGQ3OWUxYjItNjcxOC00MzJjLWI3OWItNTQyZDhiZWFhMTQ4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=DIp78T8tDEs-IVmxijUMUl3QOXpdeW4GmKO0PawrH5rZd7Ct3ZIzJ2O0pQ4xTlocnJf~ne8~l4MMdFjR9WVyG2Aws3K~dmrhbmbFNbNr5l3~9jJHVSqPOGcZm5zUMWgPGNsRuXZpblB2JIDyVtt6Yi8ok3wPCVe33EKI1Z-mhyJ3Im97ZeNVgm1JeUCkGF3qcCJrBABm1xwupREckcPj2eBNQ2IgJOSqJPxoNs8AXt7sW4PTmxbPUsP2u9ufqzFY8vvH-FeBq05~jli9s7fd0xpbNBNsARxDfdVHFT2zZoclEOF7CJP0msizFULvIJCngWg6c16FNokIgcbjaLJqBg__"
        },
        {
            "personalityTraits": [
                "Cheerful",
                "Empathetic",
                "Independent",
                "Laid-back",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-02-12",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "64981408-f061-70b6-0d15-d9c3a9beca99",
            "okToLiveWithPets": false,
            "aboutSelfAndInterests": "Hi I’m Debanny, but everyone calls me Debs. I’m 24 years old. I’m a football fan, go Pack go! I’m also into baseball. I used to be a cheerleader all through my childhood and teen years, so I’ve always loved being active and part of a team. I’m really love going for walks in parks or forests, hanging out by lakes, know new places, and just having adventures outdoors. Green spaces are totally my vibe. I’m the oldest of three siblings. My brother Marco & Diego we all live whit our Mom Juany",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-12T18:01:32.228Z",
            "score": 64,
            "opportunityId": "006R700000Qb5OMIAZ",
            "auPairName": "Debanny Alejandra",
            "id": "64981408-f061-70b6-0d15-d9c3a9beca99",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Movies",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T02:08:55.794Z",
            "lastAppLoginDate": "2026-04-28T17:27:35.909Z",
            "spotlightedReason": null,
            "approvedIQHours": 617.12,
            "profilePictureKey": "protected/64981408-f061-70b6-0d15-d9c3a9beca99/da88c882-fb37-49bd-b7e3-d9f2db6b6f88.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2190641",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2402.84,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-04-22",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Baseball",
                "Cheerleading",
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Makeup"
            ],
            "sfId": "001R700000TpjtfIAB",
            "totalNumberOfChats": 31,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64981408-f061-70b6-0d15-d9c3a9beca99/da88c882-fb37-49bd-b7e3-d9f2db6b6f88.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDk4MTQwOC1mMDYxLTcwYjYtMGQxNS1kOWMzYTliZWNhOTkvZGE4OGM4ODItZmIzNy00OWJkLWI3ZTMtZDlmMmRiNmI2Zjg4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=aWYpwQNYk~m2RXjr7J2Lq-X1v07XYBHL6Fq9EImXin7meF2BVET-Gs9enpBYUqlfUM7POW-KYzbQPzSyKHLRCNL8M3M3CSpVJ-2VD-SQwO9x0fwyUJFQBVChwXZTpVGW19026jZWikhwpzdlH2OWyCkEPoz~pcYasRC-g0Y1mkiyJJVvHZivA7R1zKhiUYCo2hDqEySNlpMgO2JFhq5k2UbuMukh4J-cICx8D2E4LEMgs148ymqXKGuBPeDL3e-PoS85lPojyiV4a266ez50drhJfzf6tDuL8-xwJqfs2stBg1K~wPUuuMj2vVUjAqNDQVYf0hLpyJ5cQqxxO2lA7Q__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "742874d8-d021-7062-1293-60a985d2665a",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I´m carolina,  I´m fashion desingner and do sports like gymnastic, cheer, aerial silks, i consider myself a warm, trustworthy and responsible person.I love working with children, i´m adaptable and positive, and also adventurous and driven, i like learning new things. i come from a loving family, and we are very close. they taught me values such us respect, patience and kindness. I would love to be part of your family, learn about your culture and improve my english skills.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T16:19:09.932Z",
            "score": 64,
            "opportunityId": "006R700000hrMHnIAM",
            "auPairName": "Caro",
            "id": "742874d8-d021-7062-1293-60a985d2665a",
            "relaxingInterests": [
                "Journaling",
                "Movies",
                "Reading",
                "Walking",
                "Yoga"
            ],
            "updatedAt": "2026-04-29T02:58:50.541Z",
            "lastAppLoginDate": "2026-04-29T02:58:50.535Z",
            "spotlightedReason": null,
            "approvedIQHours": 368.7,
            "profilePictureKey": "protected/742874d8-d021-7062-1293-60a985d2665a/33562716-cfff-4252-88aa-76f71048bb13.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2397323",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2294.3,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2003-04-29",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-08-28",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading",
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Drawing",
                "Makeup",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000onk3JIAQ",
            "totalNumberOfChats": 3,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/742874d8-d021-7062-1293-60a985d2665a/33562716-cfff-4252-88aa-76f71048bb13.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NDI4NzRkOC1kMDIxLTcwNjItMTI5My02MGE5ODVkMjY2NWEvMzM1NjI3MTYtY2ZmZi00MjUyLTg4YWEtNzZmNzEwNDhiYjEzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=QZLjNKl3DJ~TblP8g1kRpvbrk~efVFL8kFThdqyC2ti~E1~NFvtD-op1585bCF~8lreT3jtBjGw9GGjiAtWtoIi3E3qSg-KjaT2OkNNV7OvxMVpvhDd1TeBDJ7eigArczrBlF91nGNKelajXMKzcY1M3o4og4hSJWW3PgxJCc-KX5oRbLt08aBAc6qf-BpF1jXJkw4ggWpyZ0lWOXQNhlb73x6VPZW8Z7CRlrfkMb56brUOMOE~POYQM7eaHQiV2ALfLyUDAmc8SjP0IvVytKTc-21ERq2o-9bibqgaPPckKvdkxNVvlNEYDOa-U0lMZIhaJ2rpu54nYRcVxbSQGUw__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2025-10-11",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "University",
                "University",
                "High School"
            ],
            "loginId": "74b80488-50c1-7070-b3b0-d9e3f0e4bb96",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Daniela, and here is a little bit about myself. I love enjoying the simple things in life—cooking delicious meals, staying active through sports, and going out for walks to explore. It brings me so much joy and energy sharing these activities with kids, like seeing them having fun, learning, and getting excited about everything; also, I enjoy creating those special moments with laughs and connection that we create together.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-11T16:05:34.809Z",
            "score": 64,
            "opportunityId": "006R700000Ulz1yIAB",
            "auPairName": "Daniela",
            "id": "74b80488-50c1-7070-b3b0-d9e3f0e4bb96",
            "relaxingInterests": [
                "Camping",
                "Walking"
            ],
            "updatedAt": "2026-04-27T18:44:50.888Z",
            "lastAppLoginDate": "2026-04-10T15:03:58.363Z",
            "spotlightedReason": null,
            "approvedIQHours": 2057.2,
            "profilePictureKey": "protected/74b80488-50c1-7070-b3b0-d9e3f0e4bb96/860ae004-5373-4455-8aad-ca20bb88382b.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2246190",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2180,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2000-05-29",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cycling",
                "Dancing",
                "Table tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Concerts",
                "Cooking"
            ],
            "sfId": "001R700000ZTXxKIAX",
            "totalNumberOfChats": 59,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/74b80488-50c1-7070-b3b0-d9e3f0e4bb96/860ae004-5373-4455-8aad-ca20bb88382b.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NGI4MDQ4OC01MGMxLTcwNzAtYjNiMC1kOWUzZjBlNGJiOTYvODYwYWUwMDQtNTM3My00NDU1LThhYWQtY2EyMGJiODgzODJiLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=RpQcQlQEghIF0ctZ852zxzMcNfjpdu2uYZeECkmmYR6nPdlOnAeQX1Y2cpld1DeS2TtFFn-mA6qrdFA~B06tTD2zBHnf25andYLGtLWK0lRXg-4AwnfWUGIeJa5w3sVKqsbFSWyDCuCkDUf~NHJY5BAEhEemPhcyF4reldiW41DKai~QJOb03HdnyO5eb~646K0dRc0rFX7F186BZGYYJBLv39JJCm0qK~-Ch8y~RDx4oglwSBy73Oj-4Z9LLEW-ivsK3mQarg1TGTU3lUxNCeQA0oLWcW~TzRDPjnnb4K1dGO9XDX-KghmLn8bfrdFPnlT2xg27gdbLv2VWcMtW0Q__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Flexible",
                "Funny",
                "Intellectual",
                "Organized",
                "Passionate",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-01-21",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "84280448-7091-7062-30ee-efbbdeb61212",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a fun, energetic, and flexible person, with a strong interest in learning and exploring. I enjoy cinema and discovering new things. I love dancing, and thanks to my knowledge of psychology, I enjoy carrying out motor activities with children that strengthen their independence, cognitive development, and values, helping them grow into empathetic individuals.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-21T19:44:02.176Z",
            "score": 64,
            "opportunityId": "006R700000bwbhpIAA",
            "auPairName": "Sofia",
            "id": "84280448-7091-7062-30ee-efbbdeb61212",
            "relaxingInterests": [
                "Camping"
            ],
            "updatedAt": "2026-04-26T22:50:08.525Z",
            "lastAppLoginDate": "2026-03-16T16:36:27.122Z",
            "spotlightedReason": null,
            "approvedIQHours": 2500,
            "profilePictureKey": "protected/84280448-7091-7062-30ee-efbbdeb61212/3ce3616e-54bf-414e-a744-69372f0a0837.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2335412",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4015,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-06-10",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Drawing",
                "Makeup",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000i6cu5IAA",
            "totalNumberOfChats": 28,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84280448-7091-7062-30ee-efbbdeb61212/3ce3616e-54bf-414e-a744-69372f0a0837.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NDI4MDQ0OC03MDkxLTcwNjItMzBlZS1lZmJiZGViNjEyMTIvM2NlMzYxNmUtNTRiZi00MTRlLWE3NDQtNjkzNzJmMGEwODM3LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=WcGZiyVEmkyF0sV-lpGD61FV3bWbRCcpBYGc~FNcqQqqQ7kM55yfs8l5R01ZT7XlWdF54y3EVXAPwcNA6SiMFfL-D-45lsq1JcoN9-6AWJRTcv72~xsFUpL4kc2qvighDdrD~~4WJrLPufACeZI~BnupsJiObrgMKgg3t-F-On7kn7cOVT8M0LJHHSs7VnUKRjUYQP7PV1kY5JYQAJeLLX9~pZHUQlXO3stNc0GkizhqgicFVA-ofvo3TIupX~E7Ieh1ZykJRaZX4fGNSkEIRZLE62ytEZh16KpVkYiCgutuTNTzOYo4YpcaMWQN9vLxwrKDpZotCnMAP0qALTmt8w__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Independent",
                "Intellectual",
                "Organized",
                "Perceptive",
                "Proactive",
                "Warm"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "84487468-8051-70c6-4956-f9371fbdda5a",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I love reading, spending time outdoors, and exploring new places. I also enjoy going to museums, doing makeup, dancing, and cooking. I would be happy to share these activities with my host kids through fun, creative moments and quality time together",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-30T21:03:54.828Z",
            "score": 64,
            "opportunityId": "006R700000gaKOHIA2",
            "auPairName": "Laura Valentina",
            "id": "84487468-8051-70c6-4956-f9371fbdda5a",
            "relaxingInterests": [
                "Journaling",
                "Meditation",
                "Movies",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:40:42.347Z",
            "lastAppLoginDate": "2026-04-29T01:40:42.331Z",
            "spotlightedReason": null,
            "approvedIQHours": 546.24,
            "profilePictureKey": "protected/84487468-8051-70c6-4956-f9371fbdda5a/9577d73f-9ce6-46dc-8d36-12d1eb68eb24.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2384863",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1787.36,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-06-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Baseball",
                "Dancing",
                "Hiking",
                "Table tennis"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Graphic design",
                "Makeup",
                "Photography",
                "Social media",
                "Writing"
            ],
            "sfId": "001R700000nMuAdIAK",
            "totalNumberOfChats": 34,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84487468-8051-70c6-4956-f9371fbdda5a/9577d73f-9ce6-46dc-8d36-12d1eb68eb24.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NDQ4NzQ2OC04MDUxLTcwYzYtNDk1Ni1mOTM3MWZiZGRhNWEvOTU3N2Q3M2YtOWNlNi00NmRjLThkMzYtMTJkMWViNjhlYjI0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=NPepAIeywU1lYAUFsjjncX5iIBH1tEYJlY6in~0DnuH5uTXXAtB2cgs8hLgAahLAjnaHj~7Ehb-25BWZmCi7OOB5HeG9SwpJQ~IMuqBBTXPtSVfj5AIk1GSHKH5Up2sCCxt1i46ghbz6V30me646oONatLGX~3XjHakcOFcxZh49Q6bPuMODDLaO6pzYkbwQH9Zvn4ycmq-Mh58W-1JTqi~r1bCt0oMhtRT~SPpUIghyQVRoSo3n4IgTMXHZ6wSkipyJgVnRfgJTa7D2aVioNegKX~XqMl3xZBvqDSEjZVbxvUMLjGRb~EcBO4lgk5mlG7VRtzLkIJYK2muK6TDCTQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Funny",
                "Organized",
                "Passionate",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-09-02",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "9408d498-f0f1-7034-a319-5a4c63bfb364",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi dear host family! My name is Emely and i'm from colombia. I like to dance, sing, and try new and delicious recipes that i've seen on my phone. I really enjoy going to the theme park, go to the cinema, doing picnic days but also sun days in the pool or beach. I like learning new languages and enjoy doing movie nights with my family. I'm a very clean and organize person. Also i like to help others and be kind with everybody.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-09-02T21:32:47.294Z",
            "score": 64,
            "opportunityId": "006R700000Tsue2IAB",
            "auPairName": "Emely",
            "id": "9408d498-f0f1-7034-a319-5a4c63bfb364",
            "relaxingInterests": [
                "Board games",
                "Gaming",
                "Journaling",
                "Movies",
                "Puzzles",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:45:14.178Z",
            "lastAppLoginDate": "2026-04-29T01:45:14.173Z",
            "spotlightedReason": null,
            "approvedIQHours": 1018.26,
            "profilePictureKey": "protected/9408d498-f0f1-7034-a319-5a4c63bfb364/83773aad-b7d6-4311-92cd-2e30f3edccde.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2234447",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6060.78,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2005-04-15",
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Basketball",
                "Cheerleading",
                "Cycling",
                "Dancing",
                "Golf",
                "Gymnastics",
                "Lacrosse",
                "Martial arts",
                "Roller skating",
                "Soccer",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing",
                "Social media"
            ],
            "sfId": "001R700000YP9XbIAL",
            "totalNumberOfChats": 53,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/9408d498-f0f1-7034-a319-5a4c63bfb364/83773aad-b7d6-4311-92cd-2e30f3edccde.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC85NDA4ZDQ5OC1mMGYxLTcwMzQtYTMxOS01YTRjNjNiZmIzNjQvODM3NzNhYWQtYjdkNi00MzExLTkyY2QtMmUzMGYzZWRjY2RlLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Ma-eLFOVtEM7DWxw7cMZZIVlTJ-iCGtNIYUD97x8OJuGHsEWG6a7ByjBUHgqs7HchIXw5cTAMRCRE-EdRvAweS1nJ3ELMx2W2U4vFIsIXqKAN8O~10LsPiCRfmkUHs~JyIY0xHkyYRPF0E~ngfgdMRS9vBkwmLURhg12OKfaLfgrMCqLLlwSENOMexl~J4btf~FLr9ZnJCf3bQPBlUxRUjQkT4IIMFTMl9yP~mUxKzSeUbLHChfZEEIz8Wggu0F5DWgDNC~MsilBFN014ceaFgxxVQB3inTnvRBsohm-ODYbDmJ~OuCACUbrwhhE3-FlsDSJr~MtKPV~lMjoZzfizQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Cheerful",
                "Funny"
            ],
            "matchingStartDate": "2026-04-21",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "942834e8-20f1-7045-f494-4722498bd0cb",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, my name is Sara. I graduated as a teacher and I love working with children, especially younger ones. I am responsible, patient, caring, and creative. I enjoy exercising, going for walks, reading stories, doing crafts, and playing games with kids. I am Christian. I would love to support your family and create a safe, fun, and caring environment for your children while helping with their daily routines and activities.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-21T15:50:09.840Z",
            "score": 64,
            "opportunityId": "006R700000cIWMwIAO",
            "auPairName": "Sara Gómez",
            "id": "942834e8-20f1-7045-f494-4722498bd0cb",
            "relaxingInterests": [
                "Camping",
                "Movies",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-28T22:08:43.990Z",
            "lastAppLoginDate": "2026-04-28T22:08:43.985Z",
            "spotlightedReason": null,
            "approvedIQHours": 1234.4,
            "profilePictureKey": "protected/942834e8-20f1-7045-f494-4722498bd0cb/65ea0c7d-3ce8-42a8-ab87-ec29dea1a4d6.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2341230",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4821.76,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-03-30",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Roller skating",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Social media"
            ],
            "sfId": "001R700000iXB9rIAG",
            "totalNumberOfChats": 9,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/942834e8-20f1-7045-f494-4722498bd0cb/65ea0c7d-3ce8-42a8-ab87-ec29dea1a4d6.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC85NDI4MzRlOC0yMGYxLTcwNDUtZjQ5NC00NzIyNDk4YmQwY2IvNjVlYTBjN2QtM2NlOC00MmE4LWFiODctZWMyOWRlYTFhNGQ2LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Ute~56Ue4Q1yTN~~wqkCStEsVruY~dPhp4MedzFaGbHEsjYzyk7LAHtQW67HGbC3oC-lc9O1-FMcn4soFY5-XnuZR2JRHdKDLONOt5YsboXs0lC~PRYo2HnjGWJ-QjM5J7ByCc4akmpil-LOvdwLVCrFWzndWeWryUkISscE9q-psfYs~qNv8PP3t1oW1GrpANYtpYqPhEiAOiC7hKyjSisZdZZcWVYe6MzEDModbjoX5M1YAQjLHUlG8lpiwednVkhyJmXifque5UKgCF~EdWdsT9G2GVkUrL3wKTlXb~Q13Zx0kvfY09Tf6JDgvGJ6frLNz1uuFp3hJa73o9VsVw__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Athletic",
                "Calm",
                "Creative"
            ],
            "matchingStartDate": "2026-03-20",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "a4b86478-9011-70ae-e2fb-ed02493eba5e",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello dear family!  🌟🤭\nI’m Natalia Baquero, 24 years old, from Colombia. I’m studying Early Childhood Education because I love supporting children in their first learning steps. I’m calm, cheerful, and responsible. I enjoy traveling, going to the gym, painting, and learning new things. I’m excited to share this experience with you and care for your little ones with love.\nSee you soon! ❤️",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-20T15:30:41.957Z",
            "score": 64,
            "opportunityId": "006R700000alVV3IAM",
            "auPairName": "Natalia",
            "id": "a4b86478-9011-70ae-e2fb-ed02493eba5e",
            "relaxingInterests": [
                "Camping",
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-29T00:22:08.321Z",
            "lastAppLoginDate": "2026-04-29T00:22:08.316Z",
            "spotlightedReason": null,
            "approvedIQHours": 613.68,
            "profilePictureKey": "protected/a4b86478-9011-70ae-e2fb-ed02493eba5e/559931db-0af8-4729-a787-f3a2a2c781ac.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2314116",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7042.2,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-03-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Gymnastics",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup",
                "Photography",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000gk9mVIAQ",
            "totalNumberOfChats": 32,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a4b86478-9011-70ae-e2fb-ed02493eba5e/559931db-0af8-4729-a787-f3a2a2c781ac.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNGI4NjQ3OC05MDExLTcwYWUtZTJmYi1lZDAyNDkzZWJhNWUvNTU5OTMxZGItMGFmOC00NzI5LWE3ODctZjNhMmEyYzc4MWFjLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Q38pKoIF8aHYPFpKkXQpryAAvdl3mnXE1PEHfHOP9SShrbRBjz1I89z9qlCDsns9hEYynUDYeXiMM9ftNQbmD2eIrQKg0Uy-jNoRzlVqhyUGpZ2gWOqA6vWyVlkjmDsZX5qnEflDzlZ0wj68pB5ckfjiNoPo4jjXuwQzBjHWX~TdiRv0Zx8riazWQXLUqVadAWjqH6-ReEJR2LQt3gPl92CXnnuzyYOEgVFCCajKOdsoQoXXQa58nSA9xjY0AQCmPEN5gKevzbouq6G-1dv~xQmzWwebyQF9704J6U-tRJudyotfvYwMEvFaIYPG9~85Bo5Kmjk~75azmsPjARkepQ__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic",
                "Funny",
                "Independent",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-04-17",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "a4f89458-60e1-70ef-8df3-f36f1aaf4350",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Ana Sofia, I am 25 years old, and I am from Colombia. I am an empathetic, responsible, loving, and patient person with strong values. I grew up in a supportive family with values grounded in God. I enjoy serving others and building meaningful connections. I truly enjoy spending time with children and creating a safe, caring, and fun environment where they feel happy, supported, and understood. I am also sociable and enjoy sharing with others, always bringing a positive attitude.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-17T20:01:17.902Z",
            "score": 64,
            "opportunityId": "006R700000gGk0IIAS",
            "auPairName": "Ana Sofia",
            "id": "a4f89458-60e1-70ef-8df3-f36f1aaf4350",
            "relaxingInterests": [
                "Board games",
                "Journaling",
                "Movies",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T03:23:33.146Z",
            "lastAppLoginDate": "2026-04-29T03:23:33.142Z",
            "spotlightedReason": null,
            "approvedIQHours": 1528.5,
            "profilePictureKey": "protected/a4f89458-60e1-70ef-8df3-f36f1aaf4350/d7c57397-62a9-4855-ba68-7325d3d1f37d.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2382041",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3085.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2001-01-13",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking"
            ],
            "sfId": "001R700000mzpmlIAA",
            "totalNumberOfChats": 10,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a4f89458-60e1-70ef-8df3-f36f1aaf4350/d7c57397-62a9-4855-ba68-7325d3d1f37d.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNGY4OTQ1OC02MGUxLTcwZWYtOGRmMy1mMzZmMWFhZjQzNTAvZDdjNTczOTctNjJhOS00ODU1LWJhNjgtNzMyNWQzZDFmMzdkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=evKEDXgNSO0Gzw66ZuxVxCQjsN--dUe7v849nbl4JOQmq5priozsAMG5D05lYVLl4cX~uWjK9SxNV~IN~JhlH~FJ62Ejfut8nN54B3pkvzmMQH0l15R~hwAxi4fvTI0XkwLpN1N347DsoJdqN6m~jtQFInGOQ6OPffnbV4SQnw50dKhPDrEM9fJGF08c4IBfpR5V3BUKU7NnlXXUDVopv0q0WR149X8pH05FHpBaN5l6Y2jLH3jEs2-7iBE8dQgQcA0uT8GvrHCnVwFUIZqT5a1PI6bqdrBtMb200iZx-nTV1DKwgNzU1i2NT2uGseCWEHqoKGLzZVh~h5l7ne7mWg__"
        },
        {
            "personalityTraits": [],
            "matchingStartDate": "2026-02-27",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "c48814e8-a0d1-709c-ea53-b136ae252236",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Barbara, I’m 23 years old and I’m currently in my third year of a degree in Educational Sciences. I chose this field because I truly enjoy working with children and supporting their growth and development. I have already completed an internship in a nursery school, and I will soon start another one to continue gaining experience.\nOn weekends I work in a pub to earn some extra money and support myself, as I share an apartment with other girls. This experience has helped me beco",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-27T19:01:29.700Z",
            "score": 64,
            "opportunityId": "006R700000ehUrrIAE",
            "auPairName": "Barby",
            "id": "c48814e8-a0d1-709c-ea53-b136ae252236",
            "relaxingInterests": [
                "Movies",
                "Walking"
            ],
            "updatedAt": "2026-04-28T16:14:54.241Z",
            "lastAppLoginDate": "2026-04-22T15:59:29.704Z",
            "spotlightedReason": null,
            "approvedIQHours": 2523.9,
            "profilePictureKey": "protected/c48814e8-a0d1-709c-ea53-b136ae252236/3178d74e-5093-4a17-87fc-9d69ebcfbb7f.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "IT",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ITA2366234",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2523.9,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Spanish",
                "Italian"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-02-25",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000lF4ufIAC",
            "totalNumberOfChats": 16,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c48814e8-a0d1-709c-ea53-b136ae252236/3178d74e-5093-4a17-87fc-9d69ebcfbb7f.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDg4MTRlOC1hMGQxLTcwOWMtZWE1My1iMTM2YWUyNTIyMzYvMzE3OGQ3NGUtNTA5My00YTE3LTg3ZmMtOWQ2OWViY2ZiYjdmLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=cfFsZplABJ6rmtJEAzrscujGgbtcZCnOktyW4ziBYQQFKqtXqCcQInAt8paEyezQm5NGFKwNXOuuHNLY8ET7I9jNJI0oNajMRLszllgdxqOtKOdubu52R9Xc72s6X5rGbZ7WHOdKlMZzMRG1u7xBXeGYSBPQ3xJ6twh6AXLOk9xCimyDCjsLcFNasT-ABE5bp83cayNl47OgiRxnQtxgLPsaTV7qQAxamqwLBU2tEk-0tOQ~S2GvZmxYPLWxMI~0qMP0ejzkrlxeJQ4m-jYWdFeS5xdYkN5FSYaoj8FR-fYt3TLQgQ8VFoVGhS5EvfIKw~GYGs5gG-ivWQwIZZnGLQ__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Flexible",
                "Funny",
                "Independent",
                "Passionate",
                "Warm"
            ],
            "matchingStartDate": "2026-03-12",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "d44844f8-90c1-7038-11e6-834441cc6c9c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi!! My name is Isabella,but can you tell me bela or isa, I am a very patient person, responsible with my things, I want to continue improving and learning many things, I consider myself very calm and peaceful. I like to reading books, i love listening music, my favorite are jazz, salsa, pop, reggaeton. I am a third-semester undergraduate student in languages. I like the pets, for me is the best in the word. I life in cali, the city of salsa, I like to dance.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-12T21:18:27.954Z",
            "score": 64,
            "opportunityId": "006R700000a02BZIAY",
            "auPairName": "Isabella",
            "id": "d44844f8-90c1-7038-11e6-834441cc6c9c",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Gardening",
                "Journaling",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:31:38.841Z",
            "lastAppLoginDate": "2026-04-29T01:31:38.838Z",
            "spotlightedReason": null,
            "approvedIQHours": 210,
            "profilePictureKey": "protected/d44844f8-90c1-7038-11e6-834441cc6c9c/85ac7e59-cc67-45b4-87f2-f2d7de78070b.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2308192",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 210,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2005-01-28",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cycling",
                "Dancing",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000fqRpLIAU",
            "totalNumberOfChats": 14,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d44844f8-90c1-7038-11e6-834441cc6c9c/85ac7e59-cc67-45b4-87f2-f2d7de78070b.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNDQ4NDRmOC05MGMxLTcwMzgtMTFlNi04MzQ0NDFjYzZjOWMvODVhYzdlNTktY2M2Ny00NWI0LTg3ZjItZjJkN2RlNzgwNzBiLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=cv-YEluxn0MGYy7fJGgle~kdpziRzABtgKMDWkDE8LoKx74M7m1ndd6CkvKIWeTTBTZRb2LPoZDn-C9d4jruBsIds8cjlj3e89e25jbDanpwIiEKBrcKR4CJgZr3EZrGJLdSt2nUZMlemcm5EuQehgjWhnMop6TZttpZd4khWpP9KtjvJCrnUHJ9yIWaKkeqDakvLwJ0mpeCdpBJ~sRHkwg6TCNzqiihmg~onzi5p3AEXuhzaPX8ij2WTrDXgC~QJOBYWY-keLEj4zcFf5g4ozCaPW5URcJKlw9Xj7BEwSklFYsUgpUBv9muDlwED0nvTqMchwxXKyYTZQNVqnssjg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-10-10",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "e4584458-a071-7099-0c37-ea3d7e8d69d0",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, my name is Catalina. I am 21 years old and I am a Virgo. All my life I lived in the same place and in the same house, I live in a small town in Rio Negro. I live with my parents, my brother Jero and my sister Flor. I have two more sisters who live with their husbands and children. I would define myself as a calm person, my mother always tells me that I am very sweet, calm and sometimes affectionate. I like to show affection to children, especially my nephews. I feel like them need that!",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-10T13:12:54.894Z",
            "score": 64,
            "opportunityId": "006R700000Wagj6IAB",
            "auPairName": "María Catalina",
            "id": "e4584458-a071-7099-0c37-ea3d7e8d69d0",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-26T14:53:27.681Z",
            "lastAppLoginDate": "2026-04-19T20:24:00.335Z",
            "spotlightedReason": null,
            "approvedIQHours": 517.75,
            "profilePictureKey": "protected/e4584458-a071-7099-0c37-ea3d7e8d69d0/5894f348-718f-4acb-ae7b-9569ca8b8f53.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "AR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "ARG2268054",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6317.75,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-09-06",
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-12-11",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Gymnastics",
                "Soccer",
                "Swimming",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography",
                "Singing",
                "Social media",
                "Writing"
            ],
            "sfId": "001R700000bg7npIAA",
            "totalNumberOfChats": 48,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/e4584458-a071-7099-0c37-ea3d7e8d69d0/5894f348-718f-4acb-ae7b-9569ca8b8f53.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9lNDU4NDQ1OC1hMDcxLTcwOTktMGMzNy1lYTNkN2U4ZDY5ZDAvNTg5NGYzNDgtNzE4Zi00YWNiLWFlN2ItOTU2OWNhOGI4ZjUzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=bfm~tbBASgOXa~ns7EP0wdR2CSyMblnO3UhzbrKfn-htgnmsK--gRsfMgz~-izrrcKijumlaAV2iC~uJVRKoq7d1L5t3gjIRfWcB2Ly9P07H5TCX4M7KuFwGf1IeJM6yFz2pfx4ORe00uqpb-3DY-9M9wrSKmJR0qAKNbNOj0xy393zbKMum8qH4NbHFRtBXDJ9oElkW92qc~1qw~iqUaAPQkD2kL~TRswwpDyq2OHmsp8dTP3ZMMurXxtF8oFGsMMaT8HOx~e-ejhHIz6QVGnH-COKk90yQcdK7Oc6v-YhSYGhnj8TFX6uo1VwC68htsx7dghdMwqqLIMg8LBXk3Q__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-10-06",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "f4785428-8041-7023-1049-8c9bbe959aa3",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "¡Hello!. My name is Nicoll, I’m 23 years old and I’m from Bogotá, Colombia. I live with my parents and my three siblings, and we have two dogs. I recently graduated in Business Administration. \nI consider myself trustworthy, adventurous, responsible, and creative. I enjoy reading, writing, hiking, spending time in nature, going to the movies or the theater, and playing tennis, my favorite sport.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-06T20:54:59.066Z",
            "score": 64,
            "opportunityId": "006R700000WNXH0IAP",
            "auPairName": "Nicoll Valentina",
            "id": "f4785428-8041-7023-1049-8c9bbe959aa3",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gardening",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Yoga",
                "Television"
            ],
            "updatedAt": "2026-04-29T02:53:21.608Z",
            "lastAppLoginDate": "2026-04-29T02:53:21.602Z",
            "spotlightedReason": null,
            "approvedIQHours": 344.3,
            "profilePictureKey": "protected/f4785428-8041-7023-1049-8c9bbe959aa3/3d6d4b10-a3ed-47ce-a2c5-2a746381eb18.png",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2266022",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1489.3,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-11",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-08-17",
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Spiritual",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Badminton",
                "Baseball",
                "Basketball",
                "Cheerleading",
                "Cricket",
                "Cycling",
                "Dancing",
                "Fishing",
                "Golf",
                "Gymnastics",
                "Handball",
                "Hiking",
                "Horseback riding",
                "Roller skating",
                "Rugby",
                "Running",
                "Sailing",
                "Skiing",
                "Soccer",
                "Softball",
                "Squash",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Social media",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000bQeFrIAK",
            "totalNumberOfChats": 31,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4785428-8041-7023-1049-8c9bbe959aa3/3d6d4b10-a3ed-47ce-a2c5-2a746381eb18.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNDc4NTQyOC04MDQxLTcwMjMtMTA0OS04YzliYmU5NTlhYTMvM2Q2ZDRiMTAtYTNlZC00N2NlLWEyYzUtMmE3NDYzODFlYjE4LnBuZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=L-28I7pglC9nqm3kqR9So6bDdZ0dfL2dImGlZURLfh3XsmYGop6KhCrqj2nDh-YaDOcwpYfv~BYgT0Qyn5shJ0192RhWK97Cc1bJD70VbzyONqb~5pd5yQ8KaQMWn5nYx9VxwNCdwYb6zQ1bqHWop28dX4zcREz31PVYzEKOnTYAnd2AFC4b2xGtHQfS-DJBEEngAQS9BgqTgKGgPT1KSdSvVpPqsNqsnrJohF-swHxeV0n1DazvXCJ9f85fvP6DAkqr39YZpIUBWbbKS-N~X5DHjdu4ciYPMfYAfNL36MmKIgdzijIry2jhFh3IjCO3~46~q3XiI6MaYUAXkVFltg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful"
            ],
            "matchingStartDate": "2025-12-20",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "34d86488-60d1-705c-6a1d-e20fb5b3602a",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, nice to meet you. My name is Dayana and I am 20 years old. I am a young woman very passionate about serving humanity and always helping people who need me. I adore children and being able to share my knowledge with them for their future. I love the idea of educating children for a better future for our planet and sharing my knowledge so they can grow up to be good people. I am a very cheerful person who has become the best friend of every child I've spent time with, and they always adore",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-20T20:32:38.314Z",
            "score": 0,
            "opportunityId": "006R700000Ymv8TIAR",
            "auPairName": "Darly Dayana",
            "id": "34d86488-60d1-705c-6a1d-e20fb5b3602a",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Gardening"
            ],
            "updatedAt": "2026-04-28T10:00:14.907Z",
            "lastAppLoginDate": "2026-02-25T04:12:36.634Z",
            "spotlightedReason": null,
            "approvedIQHours": 4297.36,
            "profilePictureKey": "protected/34d86488-60d1-705c-6a1d-e20fb5b3602a/a30fe258-bde2-49e3-80d5-d2fd4749f48c.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2294013",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 12226.76,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2005-04-12",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cheerleading"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "Vegetarian"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Graphic design"
            ],
            "sfId": "001R700000eOoXhIAK",
            "totalNumberOfChats": 26,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 3,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34d86488-60d1-705c-6a1d-e20fb5b3602a/a30fe258-bde2-49e3-80d5-d2fd4749f48c.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGQ4NjQ4OC02MGQxLTcwNWMtNmExZC1lMjBmYjViMzYwMmEvYTMwZmUyNTgtYmRlMi00OWUzLTgwZDUtZDJmZDQ3NDlmNDhjLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=RBLd5F13h3bpTGnxauwrcUseDOSc9IJ8qJjjZ4T~g2LOsN2e7UioWZhXA8jVqgtDW7iIIhTs2MOLwpA~wAxL7F3AohFB7gT4ox8rxfIdNrDdzy04zJgpJ8M1j7u5gZOzn5VTVUo5ZWf6wg5zaN14BZDH07GKhb2TCWMag6UlVj1uD~OCOzAsQd6JYDhIO0xN-KRvh8NPtAU1IU7xiVl44-vKbkW3INbPt2YO3IgXoZIIVgCaMNDuNmV4gVkz3eDqGOonCtXNN5pXd3XhWUQ5dnqm3e9c2g107aYGYqZbp2M~KVC0s1a4SCp~Q5Q2WlAHCy4ZxcrkUGEYBuFFAfdxLg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2026-03-06",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University",
                "University"
            ],
            "loginId": "043874f8-4081-70f0-529f-153212003936",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Angie. I am a kind, responsible, and positive person. I enjoy spending time with my family and creating a calm and happy environment. I like listening to music, going for walks, and trying new things. I consider myself patient, organized, and respectful. I am open-minded and enjoy learning about different cultures. I always try to give my best and keep a good attitude in everything I do.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-06T23:01:02.833Z",
            "score": 64,
            "opportunityId": "006R700000ZUs5GIAT",
            "auPairName": "Angie",
            "id": "043874f8-4081-70f0-529f-153212003936",
            "relaxingInterests": [],
            "updatedAt": "2026-04-29T00:11:18.054Z",
            "lastAppLoginDate": "2026-04-29T00:11:18.050Z",
            "spotlightedReason": null,
            "approvedIQHours": 390.96,
            "profilePictureKey": "protected/043874f8-4081-70f0-529f-153212003936/8881c886-42e2-43b2-bde1-ff73c71ef71a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL13998271",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 390.96,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-11-14",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000EHqB8IAL",
            "totalNumberOfChats": 19,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/043874f8-4081-70f0-529f-153212003936/8881c886-42e2-43b2-bde1-ff73c71ef71a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNDM4NzRmOC00MDgxLTcwZjAtNTI5Zi0xNTMyMTIwMDM5MzYvODg4MWM4ODYtNDJlMi00M2IyLWJkZTEtZmY3M2M3MWVmNzFhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=I4K88kWwd2UWTwWBG4BwgICj8Sox9CiVI1jp7vq--yVMig9zRnNyh5QljBrK2cKBsoyrNDZT-DrZ72YaJRnwcF4DJDP26TC1vLwtnvO1kDORYAq9-QuQw0znkeh54aZ840iQKFeKb0nozSLTh~uy-wmh1IGCEoyNuBn6qUUcG7B3G5O9xGEtw9I7U12hsvw50naLXg~hup905Hce0tE~1i4osRP1781fPYSu1lD08cILIgl240RP1j8S5DqmZox35banxE2BnqAqSxWT8fl6l4m822cXq5vxeePuVlMcqNd3G9zFpW~z9jgMqQ5BKOL3zp8yv-5xHNtp7tETStUB8w__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Flexible",
                "Funny",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "14380448-a0f1-70a8-bc82-a63ccd710c30",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m 21 years old. I love taking long walks and have different hobbies like gym, hiking, etc. I also consider myself good with kids. I have experience because I’ve worked like a preschool teacher since August 2024.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-28T18:49:33.911Z",
            "score": 64,
            "opportunityId": "006R700000hPLIEIA4",
            "auPairName": "Nat",
            "id": "14380448-a0f1-70a8-bc82-a63ccd710c30",
            "relaxingInterests": [
                "Board games",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-29T03:26:39.049Z",
            "lastAppLoginDate": "2026-04-29T03:26:39.044Z",
            "spotlightedReason": null,
            "approvedIQHours": 0,
            "profilePictureKey": "protected/14380448-a0f1-70a8-bc82-a63ccd710c30/ac236049-0581-4207-8b12-677d6f64425d.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2390275",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1486.84,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-11-05",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Concerts",
                "Crafts",
                "Makeup",
                "Social media"
            ],
            "sfId": "001R700000oI4wPIAS",
            "totalNumberOfChats": 3,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/14380448-a0f1-70a8-bc82-a63ccd710c30/ac236049-0581-4207-8b12-677d6f64425d.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8xNDM4MDQ0OC1hMGYxLTcwYTgtYmM4Mi1hNjNjY2Q3MTBjMzAvYWMyMzYwNDktMDU4MS00MjA3LThiMTItNjc3ZDZmNjQ0MjVkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=f4gjQ1XzdBYmKUveG9KPvjGOY6wg-BmOaWflyRPIZUhn9W3dmPyHVBFqbeXRV2fAgmtpAZpOmkkByPqFzzsglNq4OCx0HQZKsSz6ix1tIDFQp-~DC4Pipx8OH7MFsgzsdFqxK3i3DtlGtOmzvAEi9WgY3zD6FA3C77sNswwQ336PuRW1itzIxM01xntTQCDipRqHgN3OFI60cINasvkCquqokavJrcwiy1xWC9qRUuznikkqRgLTjxd6V7RlzKfAQop1yMGW~r3jB30xBE~bxLRmtEN57zRYElUfcjdzuDFUNVTxDiu~pJLU28fOPyPF8KnUQS1eaOOSuJ3CjWwzfQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Funny",
                "Intellectual",
                "Organized",
                "Proactive",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-03-13",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "34a8f418-1051-7078-833c-0ee246a42875",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! I’m a very active and creative person, and as a teacher, I love finding fun ways to help children learn through games and activities. I enjoy dancing salsa, cumbia, and merengue, reading, and making makeup and hairstyle videos. I also love painting landscapes, flowers, and my favorite cartoons. Staying fit is important to me, so I go to the gym and eat healthy. In my free time, I enjoy playing board games like Uno, parchis , and dominoes, also in my weekends I really like walking or running.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-13T22:01:26.149Z",
            "score": 64,
            "opportunityId": "006R700000fNovlIAC",
            "auPairName": "Estefania Del Carmen",
            "id": "34a8f418-1051-7078-833c-0ee246a42875",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Journaling",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T03:23:07.095Z",
            "lastAppLoginDate": "2026-04-29T03:23:07.090Z",
            "spotlightedReason": null,
            "approvedIQHours": 2633.22,
            "profilePictureKey": "protected/34a8f418-1051-7078-833c-0ee246a42875/3a234da6-7666-4094-bbd4-20faddaa56ad.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2014741",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4750.32,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-09-08",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Table tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Drawing",
                "Makeup",
                "Photography",
                "Social media",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000lzoWMIAY",
            "totalNumberOfChats": 17,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34a8f418-1051-7078-833c-0ee246a42875/3a234da6-7666-4094-bbd4-20faddaa56ad.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGE4ZjQxOC0xMDUxLTcwNzgtODMzYy0wZWUyNDZhNDI4NzUvM2EyMzRkYTYtNzY2Ni00MDk0LWJiZDQtMjBmYWRkYWE1NmFkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=fh9ZtYbNHBPcqz8~d3NRsksaiFXwlHxmsxDVmIVbBrNk~yxUIb3tR2Flx3EIB4IjJsmyi~dUGhH54kPObwlAVumKHci2Sl1CE~DtolAObkiZDWmES~Ps89zw91xPv4Q3PC2UQBDXa6mB0PUVbblo2CEe8ZU4xWlLHeMCUrQPVzxvGoGXfGWU09xH-p9W6oMu-Jad1rU5DidzXN3K0jtdeSCXDHsSa4A~TkpprU1hdRhm4b~yl620HbUhmQtauLPgvoUn4xWI4WW1k4Iqw-pHyqhtWuqEIJIhphZq18v53Qh9dH15u6g4G1NptsRL2U9S777IUvo1wzO236bDjxNvfw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Warm"
            ],
            "matchingStartDate": "2026-03-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "44784418-9021-7018-1631-b30285c472b8",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m a language degree student with a dream of becoming a teacher of English, Spanish, and French. My greatest strength is my passion for teaching; I truly enjoy supporting children as they grow. I consider myself a creative and very empathetic person, so I adapt easily to new environments and love creating a cheerful and positive environment for children. I am ready to be part of your family and provide your children with an enriching, fun and educacional experience.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-28T18:52:14.941Z",
            "score": 64,
            "opportunityId": "006R700000gbxwzIAA",
            "auPairName": "Dani",
            "id": "44784418-9021-7018-1631-b30285c472b8",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T16:44:55.993Z",
            "lastAppLoginDate": "2026-04-23T02:42:10.232Z",
            "spotlightedReason": null,
            "approvedIQHours": 460,
            "profilePictureKey": "protected/44784418-9021-7018-1631-b30285c472b8/5fc87d95-dd30-45f6-8fc3-eb2aa63cd65e.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2384092",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3224,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2004-03-31",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Hiking",
                "Swimming",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Drawing",
                "Photography"
            ],
            "sfId": "001R700000nOWKHIA4",
            "totalNumberOfChats": 19,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": true,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44784418-9021-7018-1631-b30285c472b8/5fc87d95-dd30-45f6-8fc3-eb2aa63cd65e.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NDc4NDQxOC05MDIxLTcwMTgtMTYzMS1iMzAyODVjNDcyYjgvNWZjODdkOTUtZGQzMC00NWY2LThmYzMtZWIyYWE2M2NkNjVlLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=gcE9dVrYzWexloGj9mz0v0CQGb6nuyIAaWdJBln47xLDkN30REVcOEUvQIiVTeH42sRrQSVT3VO9Rx8U8Udz1FhgCjO7oXBjmWsa7tJRgnamJ-LdalfRqaQDAsDZg3RSLuKjAsxVj3jGpfSUzFJEctt6Rwx1clcK9CFtAskqCCiZ8qsaO83WIJdj6AedGmrD74s493UXoTqVhEaF1ShPUquOTw7-PLJFLJUkC~Z3vZPtY9J1OvJ9Jj-zI9WvV-RUTteSyVaSFpjF~mkmg0ZZU1TeJSVsBS3lH75xD6HyfhVrtAfCefUt3kWTw-Y3XIhc~NGeAiH-ozO-MHImbvMB8Q__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Cheerful",
                "Driven",
                "Empathetic",
                "Independent",
                "Laid-back",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-02-03",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "549854e8-90f1-70db-8603-00dd8449ad4b",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello host family! I’m Maria Clara, 22, from Brazil. I’ve dreamed of living abroad since I was a teenager, and now is the perfect time to make it real. I love reading, discovering new places, and sharing those moments with kids. I’m calm, responsible, loving, and creative. I’d be happy to support your children with care and fun, share my culture, and grow with your family through this amazing experience.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-02-03T14:01:26.596Z",
            "score": 64,
            "opportunityId": "006R700000Rw8FPIAZ",
            "auPairName": "Clara",
            "id": "549854e8-90f1-70db-8603-00dd8449ad4b",
            "relaxingInterests": [
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:26:40.121Z",
            "lastAppLoginDate": "2026-04-29T01:14:35.510Z",
            "spotlightedReason": null,
            "approvedIQHours": 3683.96,
            "profilePictureKey": "protected/549854e8-90f1-70db-8603-00dd8449ad4b/28a7d4f4-2f6b-42c6-994d-39dfeec6e5d9.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2208050",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 9576,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-08-22",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Handball",
                "Ice hockey",
                "Skiing",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Musical instruments"
            ],
            "sfId": "001R700000VV1HLIA1",
            "totalNumberOfChats": 17,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/549854e8-90f1-70db-8603-00dd8449ad4b/28a7d4f4-2f6b-42c6-994d-39dfeec6e5d9.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDk4NTRlOC05MGYxLTcwZGItODYwMy0wMGRkODQ0OWFkNGIvMjhhN2Q0ZjQtMmY2Yi00MmM2LTk5NGQtMzlkZmVlYzZlNWQ5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=W~ED2HsHb-TY7rmexQDBcexy-W6V93px9dPplQbFd6yzfWdEpvk27TWbIJQwyXX5LrC~5lVa13UfKLZ7B2QBXJjZsQZeswfzfRZ-YJUi5kZcwX8UZ3rM8DbLoU07CxXnFbB0gOf1RpN3855O2~Y9bbzeVD8hh94HBD34H1~oVKRBgCr8h2amuNW1e~vA9QbQrKz4BjaFXuVOpPSj0KjValpk6iwixvqUrFTDZ9NHQQ5uZqSUkqBOXm4I1ctLN9MlKDaJDE2RS4IuemRNv4Jbz0W-3iM6qO7dWyA8YU-HToLr6glYlsE87HzAZ5vqu1QrnSkQtrqSZu5bORs3qvjosg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Creative",
                "Empathetic",
                "Energetic",
                "Funny",
                "Passionate",
                "Proactive"
            ],
            "matchingStartDate": "2026-04-02",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "6438d4c8-0081-704b-3653-49d63ad25839",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m Pau 😊. I’m currently graduating from two degrees at the same time 😅🫠 while enjoying every stage of my life to the fullest. I love watching series 😎, reading books 📚, and spending time swimming and dancing 💃. I’m a cheerful, fun, and energetic person, very family-oriented—I grew up surrounded by many cousins—and I truly enjoy making new friends, sharing experiences, and connecting with different people and cultures.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-02T19:43:25.979Z",
            "score": 64,
            "opportunityId": "006R700000Q8UJhIAN",
            "auPairName": "Pau",
            "id": "6438d4c8-0081-704b-3653-49d63ad25839",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Movies",
                "Reading",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:10:18.465Z",
            "lastAppLoginDate": "2026-04-29T01:10:18.459Z",
            "spotlightedReason": null,
            "approvedIQHours": 1640.52,
            "profilePictureKey": "protected/6438d4c8-0081-704b-3653-49d63ad25839/3298f64d-f4c6-4d70-8635-792406d6f409.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2184755",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 4639.68,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-12-16",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Swimming",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000TGSZ8IAP",
            "totalNumberOfChats": 7,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/6438d4c8-0081-704b-3653-49d63ad25839/3298f64d-f4c6-4d70-8635-792406d6f409.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDM4ZDRjOC0wMDgxLTcwNGItMzY1My00OWQ2M2FkMjU4MzkvMzI5OGY2NGQtZjRjNi00ZDcwLTg2MzUtNzkyNDA2ZDZmNDA5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=SjPJpHP3wqBPrlXjH4CNC55S2cO208D4-I6mSk8aXhLKwsQ5C0NDajIZwNgwUe0fgLRozZh-yiYx0BJul8HXjExOfuraBmfYdrGiDwNW15iycApKiK-PSj-AcmdN~atRBn47NnJnzSrVOA7nVzAQ7V7ydkiE3HP-u7vSIVepOHWiWUaDhTaUWTHsCSI-mkchtPUHm4DcAo1mMtYwKYItJ3JsNEzY2Qa9BM6Yy4JZ3Ezgh7osmRK5iqocjKXJriUmbKt0z5E6nE5XktOLv52hHskvIbAPjoZMAxLB36~NE7v4xrsJh3yPA4r3n1gBECVoyC6vorc87vahdn97r1Lq5w__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Empathetic",
                "Family-oriented",
                "Funny",
                "Intellectual",
                "Organized",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-03-14",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "649864e8-3031-70f5-267d-df79eecdc851",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "¡Hi dear future host family!\n\nMy name is Ana María, I am 25 years old and I am from Bucaramanga, Colombia. I am studying Financial Administration and working part-time in customer service. I am a loving, patient, and responsible person who truly enjoys caring for others. I would love to become part of your family, share special moments, and build a meaningful connection based on trust and kindness. I am improving my English every day and I am excited to grow together with you.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-14T17:00:58.617Z",
            "score": 64,
            "opportunityId": "006R700000fTwU1IAK",
            "auPairName": "Ana Maria",
            "id": "649864e8-3031-70f5-267d-df79eecdc851",
            "relaxingInterests": [
                "Movies",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T02:55:28.449Z",
            "lastAppLoginDate": "2026-04-29T02:55:28.443Z",
            "spotlightedReason": null,
            "approvedIQHours": 1966.95,
            "profilePictureKey": "protected/649864e8-3031-70f5-267d-df79eecdc851/1bf4f4c2-578e-4990-aab3-1590ea11ce28.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2374826",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2876.25,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2000-11-10",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Badminton",
                "Basketball",
                "Cycling",
                "Dancing",
                "Martial arts",
                "Roller skating",
                "Soccer",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Drawing",
                "Photography"
            ],
            "sfId": "001R700000m7CvHIAU",
            "totalNumberOfChats": 47,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/649864e8-3031-70f5-267d-df79eecdc851/1bf4f4c2-578e-4990-aab3-1590ea11ce28.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDk4NjRlOC0zMDMxLTcwZjUtMjY3ZC1kZjc5ZWVjZGM4NTEvMWJmNGY0YzItNTc4ZS00OTkwLWFhYjMtMTU5MGVhMTFjZTI4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=adzpR1OsNJgViglNrBYUnUx2Toz48w6AbvEXlmfgCdY-wCwHcvlycvPMyS9vguHl-63alTgSPyO19ce28oXro93C528QZAJOkgQqx1HKvLrxYVOS5ZDcGsAD~1jTULc5bUnbahgW6QK2mW~EvWkokAXEFYRwenqiSHvWq4jGw3cm9xQN0gv-XDb56a0hT9nE4CmTJ49kf2xojuBBKH3e1xQGGirdhkxGtVTspYyM~E3JZOtTiFl6MCgP1tGYmKmSolR8VrF0K2g5EndxyViY9YZy2l1uECrqF1iDSRir0s6dvQzpAm4gxjci7~nSSgNrclmj~kxLJRsp3sgGm~trHA__"
        },
        {
            "personalityTraits": [],
            "matchingStartDate": "2026-03-14",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "64e804d8-80e1-7097-14f8-c1e0c6414f55",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Dear host family,\nMy name is Shirley Basto (or, as everyone calls me, “Shirly”). I’m 23 years old and I live in Cúcuta, Colombia (a WONDERFUL country). I’m a graphic designer; I like to paint, listen to music, dance, and sing (even though I’m not very good at it 😅). I enjoy various sports, and I love pizza, movies, family outings, traveling to new places, and cooking. I have two nieces and two nephews, and I love spending time with them, whether we’re playing, painting, or just running around.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-14T17:00:58.591Z",
            "score": 64,
            "opportunityId": "006R700000Dv7r9IAB",
            "auPairName": "Shirley Tatiana",
            "id": "64e804d8-80e1-7097-14f8-c1e0c6414f55",
            "relaxingInterests": [
                "Board games",
                "Movies"
            ],
            "updatedAt": "2026-04-29T00:55:14.482Z",
            "lastAppLoginDate": "2026-04-29T00:55:14.477Z",
            "spotlightedReason": null,
            "approvedIQHours": 1237.2,
            "profilePictureKey": "protected/64e804d8-80e1-7097-14f8-c1e0c6414f55/488c89a0-42d1-4874-9ec0-8e125987161b.webp",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL12173486",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5715.4,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-09-25",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-03-21",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-11-13",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cycling",
                "Dancing",
                "Horseback riding",
                "Roller skating",
                "Soccer",
                "Swimming",
                "Table tennis",
                "Tennis",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Graphic design",
                "Photography"
            ],
            "sfId": "001R700000EHfUsIAL",
            "totalNumberOfChats": 21,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64e804d8-80e1-7097-14f8-c1e0c6414f55/488c89a0-42d1-4874-9ec0-8e125987161b.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NGU4MDRkOC04MGUxLTcwOTctMTRmOC1jMWUwYzY0MTRmNTUvNDg4Yzg5YTAtNDJkMS00ODc0LTllYzAtOGUxMjU5ODcxNjFiLndlYnAqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDU1ODIwfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=RbHxY67oBzfRB4Dbu2xdC01qiqpJlzWYLxXtw9t1hw465HHYpmlGqqqFsckv9M5Ra4pPllgXx7Hl7P5ApD1WJRy6JTU~6Z1SwIVXZyZJfO3dUr91AKuAyhjc3Lsqr2VPTGR11wzcRMO5~uaM9Ds7nh2ZZlPQ7XxQy6TeKcMZ4EZkasYkbRerG2uNxc1JqO649KC9h8dwMBn27SGFhQZrw1Vjp0VMxYmW~JTPLtpfhqGd3~oJz2UdrEm0cxRmptRlSijCxUu5lyx3HoLYaxWPBDliZxhO5M5exGIaXhLpmgUtEftQ~B~-x7MFZ8R4~RqW-SRFeoraqyRz9kaL7v7WfA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Athletic",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-01",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "749844b8-b041-70e6-e7a3-1ea1eaee5628",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, my name is Laura, I am from Colombia and I am finishing my degree in Industrial Engineering, in my free time I enjoy reading books, exercising, traveling, and taking pictures, I am very good at teaching children basic things such as math and letters, I consider myself a family-oriented person and I love spending time with kids, I also enjoy running, watching children’s movies, trying different kinds of food, and learning new things.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-01T02:52:26.130Z",
            "score": 64,
            "opportunityId": "006R700000gnKwgIAE",
            "auPairName": "Laura",
            "id": "749844b8-b041-70e6-e7a3-1ea1eaee5628",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Movies"
            ],
            "updatedAt": "2026-04-29T03:20:44.014Z",
            "lastAppLoginDate": "2026-04-29T03:20:44.008Z",
            "spotlightedReason": null,
            "approvedIQHours": 1935.75,
            "profilePictureKey": "protected/749844b8-b041-70e6-e7a3-1ea1eaee5628/a939bfaa-bb1c-4bb4-a235-3a6f775340f9.jpeg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2384611",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 5329.57,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2001-01-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Drawing"
            ],
            "sfId": "001R700000nbz1uIAA",
            "totalNumberOfChats": 16,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/749844b8-b041-70e6-e7a3-1ea1eaee5628/a939bfaa-bb1c-4bb4-a235-3a6f775340f9.jpeg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NDk4NDRiOC1iMDQxLTcwZTYtZTdhMy0xZWExZWFlZTU2MjgvYTkzOWJmYWEtYmIxYy00YmI0LWEyMzUtM2E2Zjc3NTM0MGY5LmpwZWcqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDU1ODIwfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=Us8B1jTOwfi0EIDhwuAJ5h86byCjou5GyJNziUZGZI9YRT6dCVxkJl7UOxi8lGzD~aUxMzRRg3TR6wpOqIgUyalauP0Fm~n2-uVbo4Mn4ksi8yi8-V8yF5CzWHW~9neaH-fmrGPpDTUZ6VO7lEhOSJn3utmc1oal3rWQujh~swAfriJKtOX1IULfx72~pJNQ36VYjiE0dhasq5dr3DshkUamCiz8MM2xyd-ircn1x25mqICFy09wZQ934yxJxnb-IvJ8Lm7I1aYG5RmJ8YkEA2EfTH5IKnXdqLJEDjJTqIhqGHDpg7Mkjz8FFUMgVAfjwrKwz7QHzSYnR6eLeUpr~g__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Cheerful"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "74e8e4a8-b021-70f6-4a08-63a21e2e7411",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, welcome to my profile! I am from Pasto, Colombia, a beautiful place known for its amazing carnivals.\nI love spending time with my family and enjoy simple things like dancing and going for walks.\nI truly love being with children. I enjoy teaching them with patience, love, and care, and I also learn from them.\nChildren are very special to me, and I would be happy to be part of your family.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T16:35:35.865Z",
            "score": 64,
            "opportunityId": "006R700000fFdmDIAS",
            "auPairName": "Alejandra",
            "id": "74e8e4a8-b021-70f6-4a08-63a21e2e7411",
            "relaxingInterests": [],
            "updatedAt": "2026-04-29T00:40:51.870Z",
            "lastAppLoginDate": "2026-04-29T00:40:51.866Z",
            "spotlightedReason": null,
            "approvedIQHours": 1098.65,
            "profilePictureKey": "protected/74e8e4a8-b021-70f6-4a08-63a21e2e7411/e2e0ad2f-e3bf-43cb-93cf-60fa9f881d29.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2371477",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1295.65,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-07",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-03-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Gymnastics",
                "Roller skating",
                "Sailing",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [],
            "sfId": "001R700000lr5krIAA",
            "totalNumberOfChats": 0,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/74e8e4a8-b021-70f6-4a08-63a21e2e7411/e2e0ad2f-e3bf-43cb-93cf-60fa9f881d29.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC83NGU4ZTRhOC1iMDIxLTcwZjYtNGEwOC02M2EyMWUyZTc0MTEvZTJlMGFkMmYtZTNiZi00M2NiLTkzY2YtNjBmYTlmODgxZDI5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=KMIoMB7p8R2zl4BKg9GPz1-~WkEztGziXTveEm8GJpJFXvQy1DxlA~t3wNgUnWthykNcaWTie6-kJrELtL1DNzBSpOyoeowYU-kvPauewSnJDSLU1RG-m2hUEq2re1-giUuE47cl90WoORr4sAyif6qDa4I1SLO9WiaM46pFm5ML2BD-t19LqU9LagUM7y6Nx~dquIXd0hEaelR5cZ553Klf9poXrVdzYk8xnAI~7v3zLBNEckNymavTPr9yd0oD3BzBmd5oCGpEYSPDjGUWX0MrUPgwNeiwOzFSH2ZKil9pSjFK-A5HaA~mYZzrLwxdTrBi2iurgMhuM5V6Ny~IDA__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-03-26",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University",
                "University"
            ],
            "loginId": "a448b438-30b1-7006-f86f-805987328968",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I'm and I would be honored to become your Au Pair. I hold a degree in Foreign Languages and have over 3 years of experience working with children through teaching. I also spent more than 2 years doing social service, teaching English in vulnerable communities this taught me patience, empathy, and creativity. As the older sister of two younger siblings, I'm responsible, proactive, and attentive to detail. I love cooking, arts and crafts, and music. I speak Spanish, English and French fluently",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-26T17:16:49.896Z",
            "score": 64,
            "opportunityId": "006R700000gDbUcIAK",
            "auPairName": "Yazira",
            "id": "a448b438-30b1-7006-f86f-805987328968",
            "relaxingInterests": [
                "Board games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:34:43.162Z",
            "lastAppLoginDate": "2026-04-29T01:34:43.158Z",
            "spotlightedReason": null,
            "approvedIQHours": 1850,
            "profilePictureKey": "protected/a448b438-30b1-7006-f86f-805987328968/12f6680f-83e7-4a1c-a15b-8c87be499910.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2381278",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7112.26,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-07-13",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Dancing",
                "Hiking",
                "Soccer",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Crafts",
                "Singing"
            ],
            "sfId": "001R700000mwPYhIAM",
            "totalNumberOfChats": 7,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a448b438-30b1-7006-f86f-805987328968/12f6680f-83e7-4a1c-a15b-8c87be499910.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNDQ4YjQzOC0zMGIxLTcwMDYtZjg2Zi04MDU5ODczMjg5NjgvMTJmNjY4MGYtODNlNy00YTFjLWExNWItOGM4N2JlNDk5OTEwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=eBLdECvsHArWe8eeFhWrgNegF4x3c4QZtKep4H9To6~hbr05wCylGiLs~pqI5~pCmisw11tT~gkY~pCOgbIJrIjLluer61GUOqfBi7fFK0wn8kLTLE1NODRp6ZRu0QON5qKh39KlnktlRlQ4O~EW02WOy5hWoRB1NWKq-cc3rNk7uMX-qe6kTmC6UPDbpSNck8JfFWeSa1klKavWko9-OOenD0dnYZSmVripFkt5iO6HUTwje4mPZzlUrz~C8LFffSUbGtLbTmy-dA-cAuodMXpEFzgsMFNtAXGLZWE1DvTFAKVHCyyi86qDF9Ep6HExq0g0WkAICLRN~oSTKrcAKQ__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Athletic",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Energetic",
                "Family-oriented",
                "Flexible",
                "Independent",
                "Intellectual",
                "Organized",
                "Passionate",
                "Perceptive",
                "Proactive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2025-11-18",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School",
                "University",
                "University"
            ],
            "loginId": "b4785488-9031-70ac-4f98-31e41bf08f85",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I’m Emanuelle, a licensed psychologist and educator with many hours of childcare experience, from babysitting and camps. I’m a strong, determined, efficient, outgoing, warm-hearted, and love helping kids grow with respect and joy. I want to be a support your routines, share cultures, and create happy memories together. I value trust, communication, and kindness.I love coffee, nature and movement, and HP with his motto of loyalty, friendship and courage. My friends say I'm an inspiration.🏳️‍🌈",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-18T15:57:53.516Z",
            "score": 64,
            "opportunityId": "006R700000VCzAjIAL",
            "auPairName": "Emanuelle/Manu/Ema",
            "id": "b4785488-9031-70ac-4f98-31e41bf08f85",
            "relaxingInterests": [
                "Camping",
                "Card games",
                "Gaming",
                "Gardening",
                "Journaling",
                "Meditation",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T21:46:35.007Z",
            "lastAppLoginDate": "2026-03-13T04:57:22.376Z",
            "spotlightedReason": null,
            "approvedIQHours": 1569.85,
            "profilePictureKey": "protected/b4785488-9031-70ac-4f98-31e41bf08f85/5d62d6f1-6dd9-469a-8723-820233a26e34.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2251555",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2142.47,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2000-03-27",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-04",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Hiking",
                "Horseback riding",
                "Martial arts",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Concerts",
                "Cooking",
                "Makeup"
            ],
            "sfId": "001R700000ZztwIIAR",
            "totalNumberOfChats": 67,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/b4785488-9031-70ac-4f98-31e41bf08f85/5d62d6f1-6dd9-469a-8723-820233a26e34.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9iNDc4NTQ4OC05MDMxLTcwYWMtNGY5OC0zMWU0MWJmMDhmODUvNWQ2MmQ2ZjEtNmRkOS00NjlhLTg3MjMtODIwMjMzYTI2ZTM0LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=bldZZ0LEQJHx47KwXDkjRfBSIfjc9PPi8IfjfUWhOwOXSGpzvLy2-SgHwRhJlBhe1nLh4-CppIlhfq2OEgweEcnVcZxgVTD0OwqwpHlO3HWprbnuopW2wa8MvWD9Hr2ZU76TMdK758RKcwnQ3Cehan6StsNSn5HOMa7Q9L7sVpQKz44WsMFrUhZ7aGFB~rf5jvixoIxSDGfyy8OLvnvq4jFMtaiyfTJKWPvXufhrAQzUqvR0tQPtAzFLhtCjrhZbIx2P-m5nG2boiH~6cIn1LAvIRHVi7kMHJTeK~c3TCydpN~Dughy32etZbI~cvhChu5AG45cYDPGAvW8Eq3IeQw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Athletic",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-08",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "d4b86468-e021-708b-32c8-058050b7ed01",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a responsible, respectful, and committed person in my work. I consider myself organized, punctual, and dedicated to carrying out my tasks with care and attention. I like to maintain a harmonious environment, collaborate when needed, and continuously learn to improve. I enjoy helping and contributing positively, always with a good attitude and willingness to fulfill the responsibilities assigned to me.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-08T21:24:03.147Z",
            "score": 64,
            "opportunityId": "006R700000evAN1IAM",
            "auPairName": "Heidy",
            "id": "d4b86468-e021-708b-32c8-058050b7ed01",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Journaling",
                "Movies",
                "Puzzles"
            ],
            "updatedAt": "2026-04-28T23:51:02.781Z",
            "lastAppLoginDate": "2026-04-28T23:51:02.777Z",
            "spotlightedReason": null,
            "approvedIQHours": 1040,
            "profilePictureKey": "protected/d4b86468-e021-708b-32c8-058050b7ed01/8f80fd7b-5c94-44c6-8ec3-2425e52b4103.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": false,
            "auPairNumber": "COL2369171",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1040,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-02-08",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-10-30",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Cycling",
                "Dancing"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Drawing",
                "Graphic design",
                "Makeup"
            ],
            "sfId": "001R700000lU7fOIAS",
            "totalNumberOfChats": 11,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/d4b86468-e021-708b-32c8-058050b7ed01/8f80fd7b-5c94-44c6-8ec3-2425e52b4103.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9kNGI4NjQ2OC1lMDIxLTcwOGItMzJjOC0wNTgwNTBiN2VkMDEvOGY4MGZkN2ItNWM5NC00NGM2LThlYzMtMjQyNWU1MmI0MTAzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=aGDIQmLjDIOwUEJ-Jam1lAmD2AHaIzMmJJnSygyfxClUDNCrKaX-iCr8vTC937fj4G1oLdibOngs72ODNXumlYd1UCEYxXh6ngxK2ZM6xo70gXCwp1ikIxDImigmyB00ylz1hAd6cZZofI64RDk6KCBA~k06qei-HiQdQJpqzC5s5kI-nBq1StMrElwXfYs4DhcnGuzNSjq-Yo-PaJXT32Cn6pZzzidnaS8FIWNG2QiOv6LWGaQQ2EUBh~ETNTdk08y0ZI~H3VBZvDNcB7esARdyVAqTOgwhPWbpzejRz7T0cjKAp~4YQ-CUj1eCZ-JH90XHH9avFcrM0~Apa6wcWA__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "f4a86488-4081-700c-e28f-77b5f177b854",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Im a stundent of international business and i love to learning new lenguages, cultures and of i love to visit new places. I am a very calm person, that enjoy to do artistic activities like for example, paint, draw, etc. I like to go to the cinema, coffes , the beach, some parks, to the mall. And i like to do morning walkings with my dog. Recently I live in Chile during 6 months because I do an exchange, so I have experience leaving alone. With the kids I have experience taking care of my nephews",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T18:43:52.646Z",
            "score": 64,
            "opportunityId": "006R700000gpRyrIAE",
            "auPairName": "Mariana",
            "id": "f4a86488-4081-700c-e28f-77b5f177b854",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Movies",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-28T18:43:52.646Z",
            "lastAppLoginDate": "2026-04-24T16:10:29.000Z",
            "spotlightedReason": null,
            "approvedIQHours": 281.04,
            "profilePictureKey": "protected/f4a86488-4081-700c-e28f-77b5f177b854/9f8cb35e-a091-4e5d-b9a6-5e6345d34408.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2145640",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2914.32,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-08-28",
            "isIQQualified": true,
            "languages": [
                "Chinese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-07-14",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Cheerleading",
                "Soccer",
                "Swimming",
                "Table tennis",
                "Water sports"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000PToeAIAT",
            "totalNumberOfChats": 18,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4a86488-4081-700c-e28f-77b5f177b854/9f8cb35e-a091-4e5d-b9a6-5e6345d34408.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNGE4NjQ4OC00MDgxLTcwMGMtZTI4Zi03N2I1ZjE3N2I4NTQvOWY4Y2IzNWUtYTA5MS00ZTVkLWI5YTYtNWU2MzQ1ZDM0NDA4LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=XcLeQCeeFU0esRmiyXMNX3aDvwQ9ka-QQjzPg-iN79MLVDlGIgFgMeR7eR22krWMan-I38gra3phtQ-Sz~CLmR7rb47FeHZsAPK1x9xsr1dzxd-3rA~WvtEEQAIQtyyucCFqT1MmKsJgKWjEzOua9TeK8Kn3qehkh16TM1FG~DHYh8rF2xOvRLYrD83CLaCKb18mvn1xIAkNg524Txv9yUkPTWCfIi1CBHhhx0yKTQ-udRSjHPns6Va9FBn2llwdKLI1UFd6HWC4jYe3HK25Q8YhtxEJ2ZsI7WEV-D4NRNg~IuOs~IozjCUf4Jb-A25PLwkn77EGDDJlRDDG79aiNw__"
        },
        {
            "personalityTraits": [
                "Assertive",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Organized",
                "Warm"
            ],
            "matchingStartDate": "2025-11-07",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "a4c87428-7041-707d-321b-31e16ed5b255",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, I'm Jojhana and I'm 24 years old. I'm from Colombia 🇨🇴 I’m a graduate in Finance and International Trade. I love dancing and I like to watch series. I'm positive person who enjoys taking on new challenges. I like spending time with my family and friends. I'm a responsible, patient, kind, organized, empathetic, a caring person. My friends say I'm a great leader! I have 2 siblings and I love Christmas. I really enjoy spending time with kids 'cause they are creative, funny and full of energy🤗",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-12T21:13:14.962Z",
            "score": 0,
            "opportunityId": "006R700000WiFoyIAF",
            "auPairName": "Jojhana",
            "id": "a4c87428-7041-707d-321b-31e16ed5b255",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Puzzles",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-29T01:05:17.460Z",
            "lastAppLoginDate": "2026-04-29T01:04:01.896Z",
            "spotlightedReason": null,
            "approvedIQHours": 4500,
            "profilePictureKey": "protected/a4c87428-7041-707d-321b-31e16ed5b255/1bc58bb2-95b5-454e-910b-4f3d2284743a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2162719",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 9500,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Korean",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-12-27",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball",
                "Dancing",
                "Running",
                "Soccer",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Makeup",
                "Social media"
            ],
            "sfId": "001R700000bp47YIAQ",
            "totalNumberOfChats": 48,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/a4c87428-7041-707d-321b-31e16ed5b255/1bc58bb2-95b5-454e-910b-4f3d2284743a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9hNGM4NzQyOC03MDQxLTcwN2QtMzIxYi0zMWUxNmVkNWIyNTUvMWJjNThiYjItOTViNS00NTRlLTkxMGItNGYzZDIyODQ3NDNhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=g2AslJZX3jJ2Djv0HdH20iemM1d547QaOZ7MES3bgw1o7oS8XsN1yIW4aI8HorfLnMwOWNOax0VnN~bd~cpf3KK9plBzo~yWjhz~yE1ZC4m1e3emUgHfj8v~LncFAkTXxwyJnIP4gG8jQDazGH3lRVfgGFZcnMAMnG-LyMsqK2iFZvV0~yZSL2C2C~ZzfLTZ6rTGGzJ7xddeCzT7oidjdeF1qBUGBLX1mUNDkhrV8UBV7PAX3xd-4UHKprp5cM7RGI06tD7NvR98uBSGG5ed83Fm5xBfBJyXlTyRHeuPYHbuA1OylSBB9oytjNRoB9tEByE7~L8GAo2ML9i-ww6x9A__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2025-10-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School"
            ],
            "loginId": "c4585468-1051-704f-11a6-506a58052ff2",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, I'm a 21-year-old girl with a clear life plan and a strong attitude and motivation to spend time with a host family, doing a good job while also improving my conversational English. With the host children, I can develop recreational activities and crafts, teach them Spanish, which is my language, and support them in their academic pursuits.For example, I love swimming in the pool, making paper boats, playing soccer, tennis",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-10-21T21:26:38.710Z",
            "score": 0,
            "opportunityId": "006R700000OhalaIAB",
            "auPairName": "Gabriela",
            "id": "c4585468-1051-704f-11a6-506a58052ff2",
            "relaxingInterests": [
                "Board games",
                "Camping"
            ],
            "updatedAt": "2026-04-28T23:43:26.684Z",
            "lastAppLoginDate": "2026-04-28T23:43:26.680Z",
            "spotlightedReason": null,
            "approvedIQHours": 2453.5,
            "profilePictureKey": "protected/c4585468-1051-704f-11a6-506a58052ff2/05899343-7034-46c6-871e-a02fd3b0d7eb.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2166022",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2453.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-07-31",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Baseball",
                "Cycling",
                "Hiking",
                "Roller skating",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Drawing"
            ],
            "sfId": "001R700000RTozbIAD",
            "totalNumberOfChats": 12,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 2,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c4585468-1051-704f-11a6-506a58052ff2/05899343-7034-46c6-871e-a02fd3b0d7eb.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDU4NTQ2OC0xMDUxLTcwNGYtMTFhNi01MDZhNTgwNTJmZjIvMDU4OTkzNDMtNzAzNC00NmM2LTg3MWUtYTAyZmQzYjBkN2ViLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=bArTGTUrw1b4cxwIndBKt9QfqkRcN~g1V-XkNkdZam-RXVaaGZxqTcuA7v2ic766Sgbnxk~pUVNDHuW6Hrt~dfJzPmpB90CzlLw1E-vD~Qj3LIc9O24XYTdOj1zLijmy68wGNlihVii6u4RrcqN2kez22Dh2eSrT3-J6om3FbuqWEkONne9zapD~c0eIns-JsvbuSoemMDCm3v6smJyfy24mTbNS7GNV1d-deynWyIDWOO-rbBNDePj5kPuz0uBfKH~dUsO55tikhwrVC2u-MEx93smgzz0dbp3JqT0Lr33XnZmAjZRPh3fOpKSUyhGZn~LjBjZlf4BYrYCZ847H2w__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Calm",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Laid-back",
                "Organized",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-04-13",
            "excludeFromHfId": [
                "64084438-f021-70bc-5c2f-c160a2b171ad"
            ],
            "siblings": "1 sibling",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "64083498-d081-70ee-b753-83816d4a1462",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, future host family,\n\nMy name is Natali, and I'm excited to join you as a part of your family. I can't wait for this new journey! Let me share a bit about myself. I consider myself a dedicated and responsible person, passionate about exploring new places and cultures. Since my adolescence, traveling to different states in my country has been a source of discoveries and an opportunity to understand cultural diversities, making me more adaptable and open to new experiences. I'm thrilled to share my Brazilian culture with you, from our cuisine to our family traditions and customs, and learn more about American culture.\n\nI recently graduated in Architecture and Urbanism, an area that boosted my creativity, strengthened my perception and attention, and broadened my understanding of people and their lives.\n\nMy love for children started in childhood, spending days at my grandmother's farm, gathering the little ones to play and tell stories. My grandmother affectionately called us the \"Natali's daycare,\" where we created special moments and valuable lessons. Moreover, I had the privilege of caring for Lara, an incredible and bright girl, for five years. During that time, we played, explored imaginary stories, went for walks together, and even cooked small recipes. I also assisted her with school activities and hygiene. It was a constant learning experience, especially due to the affectionate and reliable connection we developed.\n\nAfter learning about the au pair program, I decided to volunteer at a school to have more contact with the children's world and also to observe how professionals in the field handle different situations involving childcare. At the school, I interacted with children of different ages and needs, including those with special needs, where I learned and grew alongside the children. This experience taught me the importance of listening to each child, fostering a loving and inclusive environment for their development.\n\nIt's gratifying for me to witness and participate in the growth and development of children. I'm eager to create a loving and supportive environment for your children, as well as providing enjoyable and educational moments. I want to become an au pair to establish a meaningful connection with your children, being an older sister and supporting them in their growth. I want to share my experiences, offer my time, and integrate into your family's dynamics. I'm here to learn and also to contribute positively to all of your lives, creating new memories together.\n\nWith love,\nNatali",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-13T17:28:34.087Z",
            "score": 80,
            "opportunityId": "006R700000hgnDGIAY",
            "auPairName": "Natali",
            "id": "64083498-d081-70ee-b753-83816d4a1462",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T03:08:57.249Z",
            "lastAppLoginDate": "2026-04-29T03:08:57.245Z",
            "spotlightedReason": null,
            "approvedIQHours": 800,
            "profilePictureKey": "protected/64083498-d081-70ee-b753-83816d4a1462/6d1e71f9-729b-4273-8066-928aef2789f0.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA11930871",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": true,
            "approvedChildcareHours": 5120,
            "duration": "<6 months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": "2027-01-07",
            "auPairType": "Rematch AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Proficient - Level 5",
            "earliestTravelDate": "2026-07-31",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "4+ children"
            ],
            "dateOfBirth": "1999-12-25",
            "monthsLeft": 5,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "California",
            "religion": "Christian",
            "statePreference": [
                "All states"
            ],
            "latestTravelDate": "2026-08-27",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Soccer",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Drawing",
                "Makeup",
                "Social media",
                "Theater"
            ],
            "sfId": "001R700000EMeV5IAL",
            "totalNumberOfChats": 117,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": true,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64083498-d081-70ee-b753-83816d4a1462/6d1e71f9-729b-4273-8066-928aef2789f0.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDA4MzQ5OC1kMDgxLTcwZWUtYjc1My04MzgxNmQ0YTE0NjIvNmQxZTcxZjktNzI5Yi00MjczLTgwNjYtOTI4YWVmMjc4OWYwLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Nf2idzFW2ZDJFRTVDiqm9nusEKVMJtOiONQNfREisexmnxD8J4iit3rwKcXQ0clHK64a5w9DOAQpne2vpXdLeVvv31qehl1ThfTk6OhZz7Juh5nYNQMjkYRSkJRXJyLQuVWjn--602yV28DQX5yJj~LW7vMYVXMhCgi7fS0jC9rj9hbmMxh4e0xxh85i2F2TJSR~4qhwHvIEGkgPPKh9ko3xUr8nlsp3l7kd5EZy7sLnb4mucoNrMgFOZX56yKdZxpjYReh6bWwngtbHX0pmnKQjFFexUGL5ElQoUvvie0afIdVNOECEsk4ieTsPjsFyHktXYUcSDfaWSh5qhViKbQ__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic"
            ],
            "matchingStartDate": "2026-04-28",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "04089428-6071-70c7-f329-a477e27f96d9",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello ✨I’m a person who likes walks, energetic, listen music, have adventures, describe new things, get to now new places, lovely whit animals and kids",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-28T18:05:48.153Z",
            "score": 64,
            "opportunityId": "006R700000bUQcTIAW",
            "auPairName": "Caro",
            "id": "04089428-6071-70c7-f329-a477e27f96d9",
            "relaxingInterests": [
                "Card games",
                "Gaming",
                "Movies"
            ],
            "updatedAt": "2026-04-29T03:24:36.112Z",
            "lastAppLoginDate": "2026-04-29T03:24:36.109Z",
            "spotlightedReason": null,
            "approvedIQHours": 1414.2,
            "profilePictureKey": "protected/04089428-6071-70c7-f329-a477e27f96d9/dddfdeac-b551-47ed-9639-abf43d01dcbb.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2309095",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7020,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-10-05",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-08-28",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Makeup"
            ],
            "sfId": "001R700000hZPXRIA4",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/04089428-6071-70c7-f329-a477e27f96d9/dddfdeac-b551-47ed-9639-abf43d01dcbb.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNDA4OTQyOC02MDcxLTcwYzctZjMyOS1hNDc3ZTI3Zjk2ZDkvZGRkZmRlYWMtYjU1MS00N2VkLTk2MzktYWJmNDNkMDFkY2JiLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=aq5uErVVajDD4kFQzpwOTxeMrnmI5ZSC95kPLYQJA4Hd1W4ICrKK929yglF~tU-F9yTy662Sqweda5w347N5QguOe5hnlhWnVIDYT8HomHtXqywIN8XSGhsB7GJVXXxuOgxRnEU019Cf2hmlXZZ3y6dZWy-0DQEF1ETenRfqCpIIrlIa9qJ9tni02zP1hqs4nz-fLOZdT4E2PZ0AuJBYzuVf2KUxwm3RZ3Uh2LlH-whdbsl4EDRga4i45booD4-TYzFQW7sM8aWQvYaYqsVODlBSGEs5sgWDHHnKvAluC20SZ344N79xsOTCDWrEMo95FLAgW~xycre0u74dlAHZJw__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-01-27",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "0438b408-8051-70f3-f257-b2b3e06ab133",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, dear host family! My name is Dhamilly, I am 22 years old and I am from Brazil. I have experience taking care of children of different ages. I started looking after my nephew when he was a newborn, and I have also cared for three other children between 1 and 6 years old. I really enjoy creating fun and educational activities, such as reading, drawing, outdoor play and learning games.\n\nI am a patient, caring and organized person, and I always try to make children feel safe, loved and happy.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-27T21:01:50.795Z",
            "score": 64,
            "opportunityId": "006R700000Tg7sSIAR",
            "auPairName": "Dhamilly",
            "id": "0438b408-8051-70f3-f257-b2b3e06ab133",
            "relaxingInterests": [
                "Gardening",
                "Movies",
                "Reading"
            ],
            "updatedAt": "2026-04-29T00:04:42.883Z",
            "lastAppLoginDate": "2026-04-28T21:32:10.475Z",
            "spotlightedReason": null,
            "approvedIQHours": 1750,
            "profilePictureKey": "protected/0438b408-8051-70f3-f257-b2b3e06ab133/aa3f56b0-98f6-4cd3-bb92-f71d234ed11a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2230989",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6275.8,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2003-07-12",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Basketball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Photography"
            ],
            "sfId": "001R700000Y8iQ7IAJ",
            "totalNumberOfChats": 33,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/0438b408-8051-70f3-f257-b2b3e06ab133/aa3f56b0-98f6-4cd3-bb92-f71d234ed11a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8wNDM4YjQwOC04MDUxLTcwZjMtZjI1Ny1iMmIzZTA2YWIxMzMvYWEzZjU2YjAtOThmNi00Y2QzLWJiOTItZjcxZDIzNGVkMTFhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=dkco8YxKpRrqgWo1g9E9XNfvV9qWTHC7Lq4urvcnz1trKTS3kqmfHtrxPl5ukdwDmnbwD67wmr5rDIqiHTp8U2WF2DHFnFWuVvpCFabCdhEy9N33KpBfdqp~-QcU8j7VcLRnB57bk5kHc4sWv6YrhgNNfry4CJt~qnbyyiNu1PExIhdhYsgwz50Elm~BmPenA98dsbVC4IH5Bo-xBGOOuifmxDx3M09J1XRiZs-quUhPLfersyBQW8wwqlVxMzMJVhWPq4hjJbaGeWGuMls~HfW-EAXXhNS2lMPxst4EL~fMb-YJaAc7fG3qRxpL65wbJFLnRx6Gj-aCRgSZ95EOgg__"
        },
        {
            "personalityTraits": [
                "Adventurous",
                "Assertive",
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-09",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "44f8d428-1011-70b8-4416-4c01e7c51e8e",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Evelin, I'm from Colombia and I live in the city of Medellín. I am an interior designer, so I am a very creative person. I love painting and baking, especially on weekends. During the week, I work and also enjoy going to the gym to stay active. I consider myself a punctual, responsible, and patient person. I like being in positive environments and surrounding myself with good energy. I truly enjoy spending time with children; with them, I smile, learn, and discover new worlds.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-09T19:53:41.414Z",
            "score": 64,
            "opportunityId": "006R700000hJC1VIAW",
            "auPairName": "Eve",
            "id": "44f8d428-1011-70b8-4416-4c01e7c51e8e",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:46:20.104Z",
            "lastAppLoginDate": "2026-04-29T01:46:20.098Z",
            "spotlightedReason": null,
            "approvedIQHours": 3402.48,
            "profilePictureKey": "protected/44f8d428-1011-70b8-4416-4c01e7c51e8e/76cd1947-8ee5-4811-be2c-2205c02dd60e.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2388127",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 11291.52,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-14",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-09-23",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Roller skating",
                "Running",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Graphic design",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000oAza8IAC",
            "totalNumberOfChats": 14,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": true,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44f8d428-1011-70b8-4416-4c01e7c51e8e/76cd1947-8ee5-4811-be2c-2205c02dd60e.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NGY4ZDQyOC0xMDExLTcwYjgtNDQxNi00YzAxZTdjNTFlOGUvNzZjZDE5NDctOGVlNS00ODExLWJlMmMtMjIwNWMwMmRkNjBlLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=PCwn-yua7rfkKwQpr1eTAWWjglbt927ijg4beHtkK~yqbzhw96fwbI1XCZSJN34RJz5xFFdqhnZw2NkCUUKKXdeH4zchzWWqOd1OKkeYo-WYfLeslq4S7Z4M9hU6DY-iewTKAzSwgjYjHJSPEUeGU1IHFvsUrq1rNSCbM1AXQkKh0vftr5mdAgNfiiz71hypQLMlfyh6RkF-wq6Msvd0R0hpojrXY9LilTR4KXN6LF8hdoPH0Tyxr9VcVhCZ4e28ljBEk0wjKLoyieLM9HSCgz1kfR-exYJNZMBhlUKa5Uhm96h3tFSFHD3-oM61MN3O~d6DfUTN2dpEg5Up3Ai41A__"
        },
        {
            "personalityTraits": [
                "Active",
                "Cheerful",
                "Creative",
                "Driven"
            ],
            "matchingStartDate": "2026-03-19",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "64685438-d011-7045-5929-b3463592db05",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, mi name is Laryze. I’m 22 years old. I love to dance, and i’ve been practicing capoeira for a few years. I’ve been working on a social capoeira project for children, teenagers and adults for some time now.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-19T16:17:21.934Z",
            "score": 64,
            "opportunityId": "006R700000fTaOfIAK",
            "auPairName": "Lary",
            "id": "64685438-d011-7045-5929-b3463592db05",
            "relaxingInterests": [
                "Movies",
                "Reading"
            ],
            "updatedAt": "2026-04-28T09:59:48.425Z",
            "lastAppLoginDate": "2026-04-25T14:03:33.600Z",
            "spotlightedReason": null,
            "approvedIQHours": 1632.9,
            "profilePictureKey": "protected/64685438-d011-7045-5929-b3463592db05/ba00304e-dce1-4482-afd4-9ec833fd073a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2374664",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2078.7,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "3 children"
            ],
            "dateOfBirth": "2003-07-05",
            "monthsLeft": 0,
            "preferredPets": [
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2026-11-06",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Dancing",
                "Martial arts"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Other"
            ],
            "creativityInterests": [
                "Art",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000m6kqxIAA",
            "totalNumberOfChats": 20,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/64685438-d011-7045-5929-b3463592db05/ba00304e-dce1-4482-afd4-9ec833fd073a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC82NDY4NTQzOC1kMDExLTcwNDUtNTkyOS1iMzQ2MzU5MmRiMDUvYmEwMDMwNGUtZGNlMS00NDgyLWFmZDQtOWVjODMzZmQwNzNhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Npz7k68CaiBl7JxmABzob61GjLF5S42u0MMQrTqRUpUpWtfd~iL6duXWULYrqrE3~bLv9m9c3YCM-C5i3PQcyvrjNfSkvMsxYaLaQopotwS3tdeuEz5TJxDlAW5iBl~ZRQkZnSQLfrTHVYDapuCQ5UTK0P5m92b33eFmdtnNcLpqaM1MG07Xp5VEMl1-jvy28Kwt75HWIzDGTg4Nu8j~9ymiNISczUAsCWEpiLIc-fzlY5COF0gcYrD0POg-YriihH4JD0Vr6iWS7UsJu-DAAnOSw7XjC3NBBnhBW8D4RgjmcCmhVKnWgMYqxLn6p3V7Dfzmu4lb4ngMExcPXN6aSQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Athletic",
                "Calm",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Independent",
                "Organized",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-01-16",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "84d8b468-30b1-70ec-a594-8824a141d12c",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Mariana, I’m 21 years old and I live in Medellín, Colombia with my family. I’m currently finishing my internship in International Business, which has helped me become responsible and organized, and I plan to start my au pair experience after completing it.\n\nIn my free time, I enjoy going to the gym, doing makeup, exploring new places and cooking at home. I love being around people and feeling connected, but I also value a little quiet time to recharge.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-16T21:01:08.765Z",
            "score": 64,
            "opportunityId": "006R700000bpuywIAA",
            "auPairName": "Mariana",
            "id": "84d8b468-30b1-70ec-a594-8824a141d12c",
            "relaxingInterests": [
                "Board games",
                "Card games",
                "Gaming",
                "Gardening",
                "Movies",
                "Puzzles",
                "Walking"
            ],
            "updatedAt": "2026-04-28T21:53:01.644Z",
            "lastAppLoginDate": "2026-04-28T21:52:32.457Z",
            "spotlightedReason": null,
            "approvedIQHours": 1874.24,
            "profilePictureKey": "protected/84d8b468-30b1-70ec-a594-8824a141d12c/3c78a565-d411-47b4-b4b8-6d556e3a1195.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2217682",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 6793.28,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Monthly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2004-08-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Gymnastics",
                "Roller skating",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Makeup",
                "Photography",
                "Singing",
                "Social media"
            ],
            "sfId": "001R700000hy9HOIAY",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/84d8b468-30b1-70ec-a594-8824a141d12c/3c78a565-d411-47b4-b4b8-6d556e3a1195.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC84NGQ4YjQ2OC0zMGIxLTcwZWMtYTU5NC04ODI0YTE0MWQxMmMvM2M3OGE1NjUtZDQxMS00N2I0LWI0YjgtNmQ1NTZlM2ExMTk1LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=AYnkHGb-X7Q7Lf8qY1xY2Mh1BIaSvgae8AsGeszFFG4WMUPUdUY0oASyt2gmnhvWTpNMeuXuwsY2csomkn8lnU5ehfurLrfK-NFG6~DlqOdNjzSA5qsgtH8aDp8R-XdMYP65QyyZ2vEiwTYvELjFC5hR5mt-~HFB8QK8pCqzX-oPBNys551~eBj4-~9~sl2liX80oeeaKcLXNeEqf2Ub2Lsu1M64iIn5Kx08eCMOeXr3cwaoML5E3d~kH3qxnuSulgqlLiLb9S2t6cfh4PzhkkVP3mEG2UW2r6hJ4ZmWMzEARwekzA~T6nN1jp7nkZfmmSOmEbjT1Lbjy~rWm-fvtQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Organized",
                "Passionate"
            ],
            "matchingStartDate": "2026-03-30",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "c4689468-c0c1-7074-f3f8-e2c2bd493c5b",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi, my name is Fanny i am twenty four years old, I am from Colombia. i studied assistant accountant, about my personality i am very empathetic, responsible, creative, kind, friendly, funny and cheerful, about my hobbis i like playing volleyball, playing tenis, riding the bycicle, drawing, paiting, whaching movies and lisen to music. \nthat's all",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-30T19:24:41.107Z",
            "score": 64,
            "opportunityId": "006R700000YJEOhIAP",
            "auPairName": "Fanny",
            "id": "c4689468-c0c1-7074-f3f8-e2c2bd493c5b",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Gaming",
                "Movies",
                "Reading"
            ],
            "updatedAt": "2026-04-29T03:09:14.725Z",
            "lastAppLoginDate": "2026-04-29T03:09:14.720Z",
            "spotlightedReason": null,
            "approvedIQHours": 4808.16,
            "profilePictureKey": "protected/c4689468-c0c1-7074-f3f8-e2c2bd493c5b/49dae5df-f6dd-4552-9231-9c515931d5db.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2244090",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "1 - 3 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 17752,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-09-20",
            "monthsLeft": 0,
            "preferredPets": [
                "Cats",
                "Dogs"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Fishing",
                "Horseback riding",
                "Roller skating",
                "Running",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Crafts",
                "Drawing",
                "Makeup",
                "Photography"
            ],
            "sfId": "001R700000dplGBIAY",
            "totalNumberOfChats": 9,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c4689468-c0c1-7074-f3f8-e2c2bd493c5b/49dae5df-f6dd-4552-9231-9c515931d5db.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDY4OTQ2OC1jMGMxLTcwNzQtZjNmOC1lMmMyYmQ0OTNjNWIvNDlkYWU1ZGYtZjZkZC00NTUyLTkyMzEtOWM1MTU5MzFkNWRiLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=Esvq9S6cVKvokJXrecZeMEMJEfCI2vtPYq6i0S4iKveE9jhwHfj59tbnCZ9D8-9pHWTwTyi~t01mKBnRaWIyO1kO26WlyK-FZ1VvGOaTG5xN2XENNoKtkfLSqtdcJ2zlOg5d5L8jD-EVXzp7czz2yhrtboRPA7mlIs0isvUnAoHDq7FEYWIG1-FA79gg9b48OuZEwPRhrNNDdC84UzbtYBOIe~iDs4rHQhK5FkBV~dGNBtdOKRcAaNbSqQsJEpjl3YESFkNt2CgbZUAjw4lZdlAeVfwqkcZvnoH-mwysgwSlEMxk-8-4NTT2PkTC-uoCK~pxqBFWb8uL7FGGyoqfzw__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Creative",
                "Driven",
                "Empathetic",
                "Energetic",
                "Flexible",
                "Funny",
                "Organized"
            ],
            "matchingStartDate": "2026-03-18",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "f4c87458-20a1-70e5-c9cb-f753f3ae3efe",
            "okToLiveWithPets": false,
            "aboutSelfAndInterests": "Dear Host Family,\nMy name is Lenna , I am 21 years old and I come from France. I have my BAFA and over 3 years of experience with children in camps and activity centers. I also help care for my 3-year-old sister. I am responsible, patient, and creative, and I love organizing fun and educational activities. I would be happy to join your family and share my culture with you.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-18T12:01:42.693Z",
            "score": 64,
            "opportunityId": "006R700000fDJoRIAW",
            "auPairName": "Lenna",
            "id": "f4c87458-20a1-70e5-c9cb-f753f3ae3efe",
            "relaxingInterests": [
                "Board games",
                "Movies"
            ],
            "updatedAt": "2026-04-28T20:56:16.032Z",
            "lastAppLoginDate": "2026-04-28T20:55:56.622Z",
            "spotlightedReason": null,
            "approvedIQHours": 898.28,
            "profilePictureKey": "protected/f4c87458-20a1-70e5-c9cb-f753f3ae3efe/056534d1-0415-4411-bdd1-bdf2d6fdaa03.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "FR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "FRA2369807",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "3 - 5 years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 2671.44,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "French"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2004-08-28",
            "monthsLeft": 0,
            "preferredPets": [],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-10-30",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "American football",
                "Baseball",
                "Basketball",
                "Cheerleading",
                "Gymnastics",
                "Roller skating",
                "Skiing",
                "Swimming"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Baking",
                "Cooking",
                "Drawing",
                "Makeup",
                "Photography",
                "Social media"
            ],
            "sfId": "001R700000lopxAIAQ",
            "totalNumberOfChats": 14,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/f4c87458-20a1-70e5-c9cb-f753f3ae3efe/056534d1-0415-4411-bdd1-bdf2d6fdaa03.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9mNGM4NzQ1OC0yMGExLTcwZTUtYzljYi1mNzUzZjNhZTNlZmUvMDU2NTM0ZDEtMDQxNS00NDExLWJkZDEtYmRmMmQ2ZmRhYTAzLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=QMe9MLlBsKTodCAaU7KU7lT~1A3BOKRC-NOQOvmiJeoj-WAyYVHFTQJyu8ktpLxIS6HyE7P3HHHnwTxtmHK0TqKmbr77HB4GMZHr41idRicWQzpxzPs2-sEHV2qYArjcNvNG6OHRhhi6t1fXKyFGUP--Rdnn~Jd2rn8z-OShYlZGhRgkskEuNcAaj0IptoZj8n7YXhhx69eYKj9Qpv~dEgDlWByau~2fj6HEC9Fq4Qd47w2d2U5r7~wzWgUm4ejhtcVR-hYXwgyAb4gTJg5tERlFQiiFjU5tDKg~mlHJvDH7zYZx6wgxequFi1p1gqqw3Ju5tDnocxLoGmk2LilBDQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Creative",
                "Driven",
                "Empathetic",
                "Flexible",
                "Funny",
                "Independent",
                "Intellectual",
                "Organized",
                "Proactive"
            ],
            "matchingStartDate": "2026-03-13",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "44d8b478-a021-7049-bab3-89720a333783",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Melissa, I'm 23 years old, and I'm from São Paulo. I am a Psychology student working in fashion, passionate about art and child development. I consider myself very independent and respectful. In my free time, I love museums, cafes, and crafts. When I'm with my younger brothers, we enjoy the pool, zoos, and cycling. I have a calm and reserved personality, but I am very friendly and love making new friends.  I truly believe that good communication is the key to resolving anything. 🩷🎭💫🎨",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-27T15:48:18.071Z",
            "score": 0,
            "opportunityId": "006R700000XZKaLIAX",
            "auPairName": "Melissa",
            "id": "44d8b478-a021-7049-bab3-89720a333783",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Puzzles"
            ],
            "updatedAt": "2026-04-29T02:40:42.981Z",
            "lastAppLoginDate": "2026-04-29T02:40:42.977Z",
            "spotlightedReason": null,
            "approvedIQHours": 929.26,
            "profilePictureKey": "protected/44d8b478-a021-7049-bab3-89720a333783/d8b8ab76-da84-4f31-8a60-c58b9594e06a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2280089",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 929.26,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-10-19",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Martial arts"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Photography",
                "Theater"
            ],
            "sfId": "001R700000csojXIAQ",
            "totalNumberOfChats": 29,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": true,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/44d8b478-a021-7049-bab3-89720a333783/d8b8ab76-da84-4f31-8a60-c58b9594e06a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC80NGQ4YjQ3OC1hMDIxLTcwNDktYmFiMy04OTcyMGEzMzM3ODMvZDhiOGFiNzYtZGE4NC00ZjMxLThhNjAtYzU4Yjk1OTRlMDZhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=H3fMwxwNVAmMoYYxgT5iJa4dzEVP7a7qtPDJ~~tcdfIL94jNR0KpxPH00i4HIO0Z-aqHSvZXo6Pu3h1pDjXzvq3thUQxM86knPxnNmSbldfWXEJr8aZ5TuyExZDAf-fORJ9W1BmXtthsV7qXhGnPv2C4QhMV3krFk2xePOjvmQ0HzI0vN8lr0uJeK8Hx~zqekx0smpa5~cG~zY90OUzMdfWU8f3W3HKNu~OUjcQrvg7WRIFQDcqje7~sHQkkX~EhDJpUTw4iJZcOF-OgznvdFh1-ttgdsDvFLRNnHFOAhEx5bI88h5-~RnWvJws5BFJlhlLG2ztLVLTYYwls~Axs0Q__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Cheerful",
                "Creative",
                "Empathetic",
                "Funny",
                "Independent",
                "Organized"
            ],
            "matchingStartDate": "2025-09-12",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "University",
                "High School"
            ],
            "loginId": "c4d88448-9011-706e-c47b-1a100aab79d5",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Kateryn, I'm engineer, I like listen to music, lay board games or activities in the nature. the movies I prefer cartons movies, and science fiction and doesn't like horror movies but I can watch it , My family es the most important for me, I love pets. I enjoy and love dance, my skincare is important for relaxing for me. I'm extrovert and talkative.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-04-11T15:47:21.708Z",
            "score": 0,
            "opportunityId": "006R700000VAsuvIAD",
            "auPairName": "Kateryn Daniela",
            "id": "c4d88448-9011-706e-c47b-1a100aab79d5",
            "relaxingInterests": [
                "Board games",
                "Gardening",
                "Movies",
                "Puzzles"
            ],
            "updatedAt": "2026-04-28T20:40:54.538Z",
            "lastAppLoginDate": "2026-03-30T23:23:52.000Z",
            "spotlightedReason": null,
            "approvedIQHours": 548.52,
            "profilePictureKey": "protected/c4d88448-9011-706e-c47b-1a100aab79d5/c7d194f9-139a-4d53-a37b-9669022a0a2d.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "MX",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "MEX2244985",
            "livedAwayFromHome": true,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1888,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-07-03",
            "isIQQualified": true,
            "languages": [
                "American Sign Language",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2000-12-27",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Other",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Dancing",
                "Gymnastics",
                "Hiking",
                "Swimming",
                "Volleyball"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Cooking",
                "Crafts",
                "Makeup",
                "Musical instruments"
            ],
            "sfId": "001R700000ZxJDmIAN",
            "totalNumberOfChats": 7,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c4d88448-9011-706e-c47b-1a100aab79d5/c7d194f9-139a-4d53-a37b-9669022a0a2d.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNGQ4ODQ0OC05MDExLTcwNmUtYzQ3Yi0xYTEwMGFhYjc5ZDUvYzdkMTk0ZjktMTM5YS00ZDUzLWEzN2ItOTY2OTAyMmEwYTJkLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=LqvM-nUE4qddnNvHsxFzCYpF9oy9Wyd0dca8CUJDZXx97xuadx159h32Eg35IrEsUE2wVJ-BfLdFhwpZ2-TOUug5IK4NvcEvZqpYwBcIlG~UwrqgpqrMtK9JpITvsYov7yABhy6UdpZewQWZoX8Flngfad2tcw4HfJI4Ly-hbk~uC5wGou7onjhg2oAT8Rcmgoe0Br0UwbBK8byaqdMSg4iaMKr8k4CXvZL3cv0yg~eCgK6bJ64k4sLC~dKtTLAM4oVPr71GjHMKpi-cUrECm~4bJXJmISawqSp4ASP7TLwt3AESNRs0x2s1KkCFYR-FEI0arjFYrvBVixYc5bH6KQ__"
        },
        {
            "personalityTraits": [
                "Active",
                "Assertive",
                "Creative",
                "Organized"
            ],
            "matchingStartDate": "2025-11-07",
            "excludeFromHfId": [],
            "siblings": "I do not have siblings",
            "education": [
                "High School"
            ],
            "loginId": "e4989448-e0e1-7024-1a5f-2a8a1398bc05",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! My name is Nicole Ortiz, I’m 23 years old and I’m from Colombia. I’m an organized, responsible, creative, and caring person who loves spending time with children. I’m studying Foreign Languages, and I enjoy reading, doing crafts, playing games, and spending quality time with others.\n\nAs your au pair, I’ll be happy to help with daily routines, play and learn with your kids, read stories, and share fun activities. I’ll make sure they feel safe, happy, and loved.\nI’m really excited to meet",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2025-11-12T21:45:33.893Z",
            "score": 0,
            "opportunityId": "006R700000WxWRHIA3",
            "auPairName": "Tephy",
            "id": "e4989448-e0e1-7024-1a5f-2a8a1398bc05",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Puzzles"
            ],
            "updatedAt": "2026-04-29T02:21:22.572Z",
            "lastAppLoginDate": "2026-04-29T02:21:22.566Z",
            "spotlightedReason": null,
            "approvedIQHours": 1488,
            "profilePictureKey": "protected/e4989448-e0e1-7024-1a5f-2a8a1398bc05/00f97ea1-e63b-4698-b4cb-58975da0ea09.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2272158",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 3046.36,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "French",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2002-12-24",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Table tennis"
            ],
            "comfortableWithLGBTQFamily": false,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Crafts"
            ],
            "sfId": "001R700000c7anGIAQ",
            "totalNumberOfChats": 45,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 1,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/e4989448-e0e1-7024-1a5f-2a8a1398bc05/00f97ea1-e63b-4698-b4cb-58975da0ea09.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9lNDk4OTQ0OC1lMGUxLTcwMjQtMWE1Zi0yYThhMTM5OGJjMDUvMDBmOTdlYTEtZTYzYi00Njk4LWI0Y2ItNTg5NzVkYTBlYTA5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=JUFgTU~48knx5pUc92~3HwV391PvcIT5Vr5mZx2K23mtxThgS0n3ClCQgWASUIIaJXmgxjJNoq-G3DRNxV0N8pprhvJiZtQHK4h-GiQ9fGd56HWFxWwgPHRMokQl1Mj~HqfDdxyzoHSjhuUi2NnvfXzoS4-pZKNllqs1JZd3JYYtI6uAECLvev-4n2Pr9uWKmwPkH4Ybr2ZGjaRt-02p04mm7eX0tdCGYbkVCIMwjmEeWpBukUAb~bk0TjOIppNjHPRMkH8TOGJJsRA8Ak52a9Zp5tdAIexpzkgRRYdy2L00WY5twEJRsOUPoKPRa09UIt1TmZXEbkpDOl8q9qqwow__"
        },
        {
            "personalityTraits": [
                "Calm",
                "Cheerful",
                "Creative",
                "Funny",
                "Laid-back",
                "Perceptive",
                "Trustworthy",
                "Warm"
            ],
            "matchingStartDate": "2026-03-12",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "14187448-2091-7008-be42-e01c2c7c9131",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hi! I love painting, (sometimes) reading, walking and driving for car and motorcycle! ☺️ I love my 15-year-old little dog, she name is actually Little. ❤️ I am actually a happy girl. I love tattooes and colorful hairs. I would like to be a big sister! I love my family and country but I would like to be learn more english, culture, America..and about me! I want to fit into a new environment!",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-03-12T14:01:16.608Z",
            "score": 64,
            "opportunityId": "006R700000ezmALIAY",
            "auPairName": "Dóri",
            "id": "14187448-2091-7008-be42-e01c2c7c9131",
            "relaxingInterests": [
                "Board games",
                "Movies",
                "Reading",
                "Walking",
                "Television"
            ],
            "updatedAt": "2026-04-27T18:22:36.860Z",
            "lastAppLoginDate": "2026-04-25T13:22:46.563Z",
            "spotlightedReason": null,
            "approvedIQHours": 735,
            "profilePictureKey": "protected/14187448-2091-7008-be42-e01c2c7c9131/cb7230cb-c696-4d34-bec2-3ab5803728f9.jpg",
            "extensionType": null,
            "okToLiveSingleParent": false,
            "homeCountry": "HU",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "HUN2365984",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 735,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Daily",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-09-04",
            "isIQQualified": true,
            "languages": [
                "Hungarian"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2001-05-07",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-12-18",
            "matchingSubStatus": "Available",
            "sportInterests": [],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Art",
                "Cooking",
                "Drawing",
                "Makeup"
            ],
            "sfId": "001R700000lZe2yIAC",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 1,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/14187448-2091-7008-be42-e01c2c7c9131/cb7230cb-c696-4d34-bec2-3ab5803728f9.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8xNDE4NzQ0OC0yMDkxLTcwMDgtYmU0Mi1lMDFjMmM3YzkxMzEvY2I3MjMwY2ItYzY5Ni00ZDM0LWJlYzItM2FiNTgwMzcyOGY5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=G1zco775XHQWba814QbBoiAsZB-crUcZ-Ob6a9IWW982OC4gt5Av71NoI7r6oC1j0ATacb6lwL9DsagUbzhR5OQLotk-32e~nOXSI5ewrJrdX3Qu9aE00u-LD74gy2Vnp6xZJSNDEtgmnV87-zlSR3amrnZIAiHVIsAhByS8RLHFuy8UvdAVsPd47MKBA2mMNk0~Q-QwDFIcvDQIjbONroBTWl3JkwA2O8RTAGzwXchmm6Rf25zg8FnOLhbeMd1qdji4-lqvY5UxoOUJwZYICEuoBe~uxjCwGQcrZm41Mvv4~FRWIe2uFrwEuCMhMJkwf1Mtj0YG8CXSSRtlKkfXAg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Calm",
                "Cheerful",
                "Creative"
            ],
            "matchingStartDate": "2026-04-09",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [],
            "loginId": "14684418-40e1-706e-6dfb-129deea8aad0",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, my name is Ana Carolina Zúñiga. I would like to tell you a little about myself. I consider myself a dreamer and a curious person. I really like airplanes because, for me, they represent freedom, adventure, and the chance to discover new places. I love the beach; it is my favorite place to relax and feel happy. I enjoy cooking and listening to music at the same time. I also like reading, and it is one of my favorite activities in my free time.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-04-09T16:29:33.730Z",
            "score": 64,
            "opportunityId": "006R700000eEyWkIAK",
            "auPairName": "Ana Carolina",
            "id": "14684418-40e1-706e-6dfb-129deea8aad0",
            "relaxingInterests": [
                "Movies",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T23:36:10.634Z",
            "lastAppLoginDate": "2026-04-28T23:36:10.630Z",
            "spotlightedReason": null,
            "approvedIQHours": 1248,
            "profilePictureKey": "protected/14684418-40e1-706e-6dfb-129deea8aad0/38fd4b3e-0b96-40dc-bee3-96cbf6912bf4.webp",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "CO",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "COL2360427",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 1248,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-08-21",
            "isIQQualified": true,
            "languages": [
                "None",
                "Spanish"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-02-01",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking"
            ],
            "sfId": "001R700000kiDS5IAM",
            "totalNumberOfChats": 8,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/14684418-40e1-706e-6dfb-129deea8aad0/38fd4b3e-0b96-40dc-bee3-96cbf6912bf4.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8xNDY4NDQxOC00MGUxLTcwNmUtNmRmYi0xMjlkZWVhOGFhZDAvMzhmZDRiM2UtMGI5Ni00MGRjLWJlZTMtOTZjYmY2OTEyYmY0LndlYnAqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzc3NDU1ODIwfX19XX0_&Key-Pair-Id=K2W530A2BIWBUX&Signature=N0eu1UlV89PY5q-r~uYIb-CRVnKXBL4gNgeS0dip4yHoXbWIheb2cSnWN8-Fpv8-Vn2PolyvV96m64VTUYUH6v1AYSHzdH3VNDe92mcqG~ZqgcKV7301E-DC6dLOktG2~-EOl7Eq6D5GWXOyPnjYSZ1qAshXtnI7ZmdjvLa7V6S-KwT9WEUZTVQ~KBTT8-M0jdtYcNNHSPlb0TjGQJHCwa8AlHvFYEsansbhlQaMzYd3E8fkfYYSD~6DoB4dLiZ-AxSSO9NvBUKQsEeAQ8lp0vEYFGBYWvTVFVLUE9v~rMxMLdXEYs4tZyEf4iZLwD30FW80n-vmMiBA653Zd2wp1w__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm"
            ],
            "matchingStartDate": "2026-03-25",
            "excludeFromHfId": [],
            "siblings": "2 siblings",
            "education": [
                "High School"
            ],
            "loginId": "34d82498-2081-7072-491f-0c9c3d0a14f9",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "My name is Camila, I’m 24 years old, and I’m from Brazil. I consider myself a kind, patient, and responsible person who loves learning about new cultures and meeting people from around the world.\nI decided to become an au pair because I want to improve my English, experience daily life in another country, and grow personally while being part of a welcoming family.\nI really enjoy spending time with children, helping them learn new things, and creating fun and caring moments together.\nIn my free time, I love cooking, reading, listening to music, and going to the shopping mall with friends. These activities make me feel relaxed and happy.\nI hope to find a loving family where we can share good experiences, learn from each other, and build great memories together.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2026-03-25T16:25:59.972Z",
            "score": 64,
            "opportunityId": "006R700000WmVAOIA3",
            "auPairName": "Camila",
            "id": "34d82498-2081-7072-491f-0c9c3d0a14f9",
            "relaxingInterests": [
                "Camping",
                "Gaming",
                "Movies",
                "Television"
            ],
            "updatedAt": "2026-04-28T04:46:30.455Z",
            "lastAppLoginDate": "2026-04-19T13:06:12.132Z",
            "spotlightedReason": null,
            "approvedIQHours": 1532.5,
            "profilePictureKey": "protected/34d82498-2081-7072-491f-0c9c3d0a14f9/bf83af36-6276-45ef-b83c-46c9c59889ea.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2269613",
            "livedAwayFromHome": false,
            "preferredAges": [
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 14336.5,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Weekly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2001-04-09",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Christian",
            "statePreference": null,
            "latestTravelDate": "2026-10-02",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Ice hockey",
                "Soccer"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "Lactose free"
            ],
            "creativityInterests": [
                "Art",
                "Baking",
                "Concerts",
                "Cooking",
                "Drawing",
                "Social media"
            ],
            "sfId": "001R700000bu9jIIAQ",
            "totalNumberOfChats": 2,
            "validNumberOfChats": 0,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/34d82498-2081-7072-491f-0c9c3d0a14f9/bf83af36-6276-45ef-b83c-46c9c59889ea.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC8zNGQ4MjQ5OC0yMDgxLTcwNzItNDkxZi0wYzljM2QwYTE0ZjkvYmY4M2FmMzYtNjI3Ni00NWVmLWI4M2MtNDZjOWM1OTg4OWVhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=NIEGInORK3x426pDerkeAshzNTUHczMiiTzSskO7yk8ORlSTJbxeNDscHANrUyqVDTMB3oeKsZMqxQWdC1rDMfBZZ43dZ8Q4lVJRirmuS64yyWPXM1E8TFylebIqE0s9G2l6fYCl6~bb0dz7zic0tkjLjMGjM0ETOb44JMoPCNK~1TdpZECxPKaWs9RyB0gNv5DhuhOCzLSa8W9He5baKe07s86T6LYiSaDrZxNLhvfNM1Pu4NTWETvRH7JCM0HEZ0bYQ3B0TAkvsSlYOw~utJDioKTmjNA77mTgA-~kwqZfSm1tXTh8USfQXC48bOoiRxpa~pui1ywCcTlesLyXCg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Calm",
                "Creative",
                "Empathetic",
                "Family-oriented",
                "Flexible",
                "Independent",
                "Organized",
                "Trustworthy"
            ],
            "matchingStartDate": "2026-01-17",
            "excludeFromHfId": [],
            "siblings": "3+ siblings",
            "education": [
                "High School",
                "University"
            ],
            "loginId": "54789468-b001-70ae-2178-d5eb5a411759",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "I am a curious, creative, calm and Easy to deal with. I love discovering new things, experimenting with different ideas. I am the balance between being extroverted and being introverted, I adapt to the environment. I'm a good listener and I love an adventure. I lover art to, since I graduated in Gráfic Design, I stiil don’t work with this, but I make some art for some people, includ my sister’s brand Mare d’ Aromi.",
            "okToSuperviseSwimmingChildren": true,
            "createdAt": "2026-01-17T16:00:52.511Z",
            "score": 64,
            "opportunityId": "006R700000PGWyPIAX",
            "auPairName": "Lu",
            "id": "54789468-b001-70ae-2178-d5eb5a411759",
            "relaxingInterests": [
                "Board games",
                "Camping",
                "Card games",
                "Gaming",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-28T22:52:28.782Z",
            "lastAppLoginDate": "2026-03-16T13:42:22.655Z",
            "spotlightedReason": null,
            "approvedIQHours": 1110,
            "profilePictureKey": "protected/54789468-b001-70ae-2178-d5eb5a411759/3ce98c95-cc64-409b-bf3d-2176c70b9449.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA2173028",
            "livedAwayFromHome": true,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years"
            ],
            "yearsDriving": "Less than 1 year",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 8581.17,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "extensionLength": null,
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "None",
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "2 children"
            ],
            "dateOfBirth": "2000-09-12",
            "monthsLeft": 0,
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses"
            ],
            "currentLocation": "In home country",
            "religion": "Not religious",
            "statePreference": null,
            "latestTravelDate": "2026-09-25",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Hiking",
                "Roller skating"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Art",
                "Concerts",
                "Crafts",
                "Drawing",
                "Graphic design",
                "Makeup",
                "Musical instruments",
                "Photography",
                "Singing",
                "Theater",
                "Writing"
            ],
            "sfId": "001R700000S93UnIAJ",
            "totalNumberOfChats": 39,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/54789468-b001-70ae-2178-d5eb5a411759/3ce98c95-cc64-409b-bf3d-2176c70b9449.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC81NDc4OTQ2OC1iMDAxLTcwYWUtMjE3OC1kNWViNWE0MTE3NTkvM2NlOThjOTUtY2M2NC00MDliLWJmM2QtMjE3NmM3MGI5NDQ5LmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=LhPal95GZcygtL-GK07-jYUD4jA2ltVhrkoSl2Em3Ct~iyPkFdVmdScrqm4sY0rZ1diSxdLsp9c4Kab157-yF455b2H9hSjvdMPjcVHkvoVI1uqAnLjJAZyKOqPiMdBb9f1ROpP0naXg~YdltM9eZ5ajjq5uMQOBJlTZ4JGZnqi0ra5J8-b1RV1rXTxPzFL3bXaF1vKc9gyE5R1Wclsc0wzlqNNMPbtSghTf68FzIGh0rQu~5C-qxIZNe7EnkYZdCI-V6ruvmEjCfvK15S7OrYNJh2B2LdS767H76-xkU-PHHku38J5hqeGbfDaB2ljpQl~NGQ5Sw2J9Z-dxD3P-Cg__"
        },
        {
            "personalityTraits": [
                "Active",
                "Adventurous",
                "Assertive",
                "Calm",
                "Creative",
                "Empathetic",
                "Flexible",
                "Funny",
                "Independent",
                "Organized",
                "Perceptive",
                "Proactive"
            ],
            "matchingStartDate": "2025-03-06",
            "excludeFromHfId": [],
            "siblings": "1 sibling",
            "education": [
                "High School"
            ],
            "loginId": "c498e448-4051-704c-83ae-a56ce41b3805",
            "okToLiveWithPets": true,
            "aboutSelfAndInterests": "Hello, dear moms and dads!           My name's Marina, I'm 25 years old, I have a degree in business administration and other complementary courses. I am passionate about knowing and learning new things, and I enjoy taking care of children. I would like an opportunity to be part of the family and be able to make the children's moments unforgettable and unique so that they have the best childhood memories.",
            "okToSuperviseSwimmingChildren": false,
            "createdAt": "2025-03-06T19:55:42.535Z",
            "score": 64,
            "opportunityId": "006R700000Dvz1aIAB",
            "auPairName": "Marina",
            "countryOfBirth": "BR",
            "id": "c498e448-4051-704c-83ae-a56ce41b3805",
            "relaxingInterests": [
                "Card games",
                "Gaming",
                "Gardening",
                "Movies",
                "Puzzles",
                "Reading",
                "Walking"
            ],
            "updatedAt": "2026-04-29T01:11:08.128Z",
            "lastAppLoginDate": "2026-04-29T01:11:08.124Z",
            "spotlightedReason": null,
            "approvedIQHours": 3135,
            "profilePictureKey": "protected/c498e448-4051-704c-83ae-a56ce41b3805/4a0bed43-c0d1-4ba6-863a-e5d1fbc37b4a.jpg",
            "extensionType": null,
            "okToLiveSingleParent": true,
            "homeCountry": "BR",
            "staffInitiatedChatAvailable": true,
            "auPairNumber": "BRA13963799",
            "livedAwayFromHome": false,
            "preferredAges": [
                "3 - 11 months",
                "12 - 23 months",
                "2 - 4 years",
                "5 - 9 years",
                "10+ years",
                "All ages"
            ],
            "yearsDriving": "5+ years",
            "okToLiveStayAtHomeParent": false,
            "approvedChildcareHours": 7677.9,
            "duration": "9+ months",
            "genderIdentity": "Female",
            "socialInterests": [],
            "drivingFrequency": "Irregularly",
            "programEndDate": null,
            "auPairType": "Home Country AP",
            "isSpotlighted": false,
            "englishProficiencyLevel": "Intermediate - Level 4",
            "earliestTravelDate": "2026-06-12",
            "isIQQualified": true,
            "languages": [
                "Portuguese"
            ],
            "numberOfChildrenCanCareFor": [
                "1 child"
            ],
            "dateOfBirth": "2000-05-09",
            "preferredPets": [
                "Birds",
                "Cats",
                "Dogs",
                "Fish",
                "Horses",
                "Reptiles"
            ],
            "currentLocation": "In home country",
            "religion": "Catholic",
            "statePreference": null,
            "latestTravelDate": "2027-05-21",
            "matchingSubStatus": "Available",
            "sportInterests": [
                "Cycling",
                "Hiking",
                "Running"
            ],
            "comfortableWithLGBTQFamily": true,
            "foodPreferences": [
                "No preference"
            ],
            "creativityInterests": [
                "Cooking"
            ],
            "sfId": "001R700000EHqG7IAL",
            "totalNumberOfChats": 47,
            "validNumberOfChats": 2,
            "openForSpecialNeeds": false,
            "specialNeedsQualified": false,
            "_score": 0,
            "profilePictureCfn": "https://db5l25jr8l5uj.cloudfront.net/protected/c498e448-4051-704c-83ae-a56ce41b3805/4a0bed43-c0d1-4ba6-863a-e5d1fbc37b4a.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kYjVsMjVqcjhsNXVqLmNsb3VkZnJvbnQubmV0L3Byb3RlY3RlZC9jNDk4ZTQ0OC00MDUxLTcwNGMtODNhZS1hNTZjZTQxYjM4MDUvNGEwYmVkNDMtYzBkMS00YmE2LTg2M2EtZTVkMWZiYzM3YjRhLmpwZyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Nzc0NTU4MjB9fX1dfQ__&Key-Pair-Id=K2W530A2BIWBUX&Signature=a11POMkgKQRj-tSdtiAtbqMQ0xGHUyhlLPfMiX0wPUendlrkpf3t1UWN2c6HXuOyCioqhXt9OXMMzrIapCq22zbaIeQepazLm4bMabzdAAz6GwPgyuhSEc~NpFR8bYZupHB-IrSRhtOFVt017EnUWdznbeZ9M7RGlxr07pc67TtTVtkU0vlgR7tZIRQLH6PuTvvTsif14uVK6zXVaOQeBE7leUvVm52NXFOqv9drnSorW1f3Ln5dOtABKjfh~s1gQtgJDj06MqxNloEhDfpMbcrCM4ju21LFOOaNWcBiiOyzT-4QmFYBMDOkhVcjSHMSU1hRC2G85vdH4HWmuJpQGQ__"
        }
    ]

// Run the comparison
const result = findUniqueItems(list1, list2, 'id');

// Display results
console.log('=== COMPARISON RESULTS ===\n');
console.log('Summary:');
console.log(result.summary);

console.log('\n--- Items ONLY in List 1 ---');
console.log(result.onlyInList1.length > 0 
  ? JSON.stringify(result.onlyInList1.map(x => x.auPairNumber), null, 2)
  : 'No unique items');

console.log('\n--- Items ONLY in List 2 ---');
console.log(result.onlyInList2.length > 0 
  ? JSON.stringify(result.onlyInList2.map(x => x.auPairNumber), null, 2)
  : 'No unique items');

// Export for use as module (Node.js)
module.exports = { findUniqueItems };
