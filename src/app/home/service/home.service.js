export default class HomeService {
  constructor($http) {
    this.http = $http;
  }

  GetAll(page = 1, amountOnPage = 10, callback) {
    callback({
      status: 200,
      data: [
        {
          id: 1,
          name: 'student',
          description: 'A glittering gem is not enough.',
          price: 14522.48,
          dateOfCreation: '2018-12-25T20:27:48.958',
          dateOfModification: '2018-12-25T20:27:48.958',
          duration: 2,
          tags: [
            {
              id: 99,
              name: 'lock',
            },
            {
              id: 447,
              name: 'disappointment',
            },
            {
              id: 468,
              name: 'building',
            },
            {
              id: 663,
              name: 'winter',
            },
            {
              id: 771,
              name: 'beef',
            },
          ],
        },
        {
          id: 2,
          name: 'driver',
          description: 'Tom got a small piece of pie.',
          price: 27858.25,
          dateOfCreation: '2018-12-25T20:27:48.982',
          dateOfModification: '2018-12-25T20:27:48.982',
          duration: 2,
          tags: [
            {
              id: 102,
              name: 'nail',
            },
            {
              id: 276,
              name: 'rough',
            },
            {
              id: 413,
              name: 'invite',
            },
            {
              id: 710,
              name: 'charge',
            },
          ],
        },
        {
          id: 3,
          name: 'patience',
          description: 'He told us a very exciting adventure story.',
          price: 54609.77,
          dateOfCreation: '2018-12-25T20:27:49.002',
          dateOfModification: '2018-12-25T20:27:49.002',
          duration: 4,
          tags: [
            {
              id: 33,
              name: 'product',
            },
            {
              id: 76,
              name: 'illness',
            },
            {
              id: 193,
              name: 'cold',
            },
            {
              id: 620,
              name: 'density',
            },
            {
              id: 684,
              name: 'microphone',
            },
            {
              id: 941,
              name: 'brink',
            },
          ],
        },
        {
          id: 4,
          name: 'people',
          description: 'He ran out of money, so he had to stop playing poker.',
          price: 74371.78,
          dateOfCreation: '2018-12-25T20:27:49.015',
          dateOfModification: '2018-12-25T20:27:49.015',
          duration: 4,
          tags: [
            {
              id: 621,
              name: 'dish',
            },
            {
              id: 696,
              name: 'snap',
            },
            {
              id: 751,
              name: 'complain',
            },
            {
              id: 911,
              name: 'ankle',
            },
          ],
        },
        {
          id: 5,
          name: 'area',
          description: 'I love eating toasted cheese and tuna sandwiches.',
          price: 45047.44,
          dateOfCreation: '2018-12-25T20:27:49.034',
          dateOfModification: '2018-12-25T20:27:49.034',
          duration: 8,
          tags: [
            {
              id: 84,
              name: 'pan',
            },
            {
              id: 262,
              name: 'hover',
            },
            {
              id: 467,
              name: 'committee',
            },
            {
              id: 514,
              name: 'lonely',
            },
            {
              id: 572,
              name: 'press',
            },
            {
              id: 907,
              name: 'love',
            },
          ],
        },
        {
          id: 6,
          name: 'story',
          description: 'This is the last random sentence I will be writing and I am going to stop mid-sent',
          price: 53993.34,
          dateOfCreation: '2018-12-25T20:27:49.054',
          dateOfModification: '2018-12-25T20:27:49.054',
          duration: 4,
          tags: [
            {
              id: 48,
              name: 'myth',
            },
            {
              id: 120,
              name: 'store',
            },
            {
              id: 222,
              name: 'suffering',
            },
            {
              id: 696,
              name: 'snap',
            },
            {
              id: 765,
              name: 'pocket',
            },
            {
              id: 930,
              name: 'court',
            },
          ],
        },
        {
          id: 7,
          name: 'manufacturer',
          description: 'Where do random thoughts come from?',
          price: 70592.93,
          dateOfCreation: '2018-12-25T20:27:49.076',
          dateOfModification: '2018-12-25T20:27:49.076',
          duration: 3,
          tags: [
            {
              id: 102,
              name: 'nail',
            },
            {
              id: 217,
              name: 'rational',
            },
            {
              id: 621,
              name: 'dish',
            },
            {
              id: 699,
              name: 'heroin',
            },
            {
              id: 702,
              name: 'shaft',
            },
          ],
        },
        {
          id: 8,
          name: 'proposal',
          description: 'The body may perhaps compensates for the loss of a true metaphysics.',
          price: 82382.32,
          dateOfCreation: '2018-12-25T20:27:49.092',
          dateOfModification: '2018-12-25T20:27:49.092',
          duration: 6,
          tags: [
            {
              id: 91,
              name: 'promote',
            },
            {
              id: 226,
              name: 'chimpanzee',
            },
            {
              id: 349,
              name: 'captain',
            },
            {
              id: 480,
              name: 'exception',
            },
            {
              id: 498,
              name: 'sister',
            },
            {
              id: 893,
              name: 'bang',
            },
          ],
        },
        {
          id: 9,
          name: 'environment',
          description: 'He didn’t want to go to the dentist, yet he went anyway.',
          price: 47686.14,
          dateOfCreation: '2018-12-25T20:27:49.109',
          dateOfModification: '2018-12-25T20:27:49.109',
          duration: 6,
          tags: [
            {
              id: 102,
              name: 'nail',
            },
            {
              id: 371,
              name: 'rice',
            },
            {
              id: 418,
              name: 'patient',
            },
            {
              id: 731,
              name: 'district',
            },
          ],
        },
        {
          id: 10,
          name: 'chapter',
          description: 'It was getting dark, and we weren’t there yet.',
          price: 2821.94,
          dateOfCreation: '2018-12-25T20:27:49.125',
          dateOfModification: '2018-12-25T20:27:49.125',
          duration: 3,
          tags: [
            {
              id: 61,
              name: 'function',
            },
            {
              id: 302,
              name: 'fare',
            },
            {
              id: 503,
              name: 'child',
            },
            {
              id: 515,
              name: 'weak',
            },
            {
              id: 626,
              name: 'monkey',
            },
            {
              id: 773,
              name: 'present',
            },
            {
              id: 820,
              name: 'dominant',
            },
            {
              id: 848,
              name: 'baseball',
            },
          ],
        },
      ],
    });

    /*
    this.http({
      url: `http://localhost:8888/giftcertificates?amountOnPage=${amountOnPage}&page=${page}`,
      dataType: 'json',
      method: 'GET',
      data: '',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        callback(response);
      });
       */
  }
}
