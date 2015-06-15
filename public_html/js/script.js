$(document).ready(function() {
 $('#main').w2grid({ 
        name: 'grid', 
        searches: [                
            { field: 'lname', caption: 'Last Name', type: 'text' },
            { field: 'fname', caption: 'First Name', type: 'text' },
            { field: 'email', caption: 'Email', type: 'text' },
        ],
        sortData: [ { field: 'recid', direction: 'asc' } ],
        columns: [                
            { field: 'lname', caption: 'Last Name', size: '30%', sortable: true },
            { field: 'fname', caption: 'First Name', size: '30%', sortable: true },
            { field: 'email', caption: 'Email', size: '40%', sortable: true },
            { field: 'sdate', caption: 'Start', size: '90px', sortable: true },
            { field: 'edate', caption: 'End', size: '90px', sortable: true }
        ],
        records: [
            { recid: 1, fname: 'Jane', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012', edate: '12/3/2012' },
            { recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012', edate: '11/3/2012' },
            { recid: 3, fname: 'Jin', lname: 'Franson', email: 'peter@gmail.com', sdate: '4/3/2012', edate: '4/3/2012' },
            { recid: 4, fname: 'Susan', lname: 'Ottie', email: 'frank@gmail.com', sdate: '9/3/2012', edate: '10/3/2012' },
            { recid: 5, fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '6/3/2012', edate: '4/24/2012' },
            { recid: 6, fname: 'Francis', lname: 'Gatos', email: 'jdoe@gmail.com', sdate: '2/3/2012', edate: '6/3/2012' },
            { recid: 7, fname: 'Mark', lname: 'Welldo', email: 'susan@gmail.com', sdate: '4/3/2012', edate: '6/23/2012' },
            { recid: 8, fname: 'Thomas', lname: 'Bahh', email: 'david@gmail.com', sdate: '9/3/2012', edate: '4/16/2012' },
            { recid: 9, fname: 'Sergei', lname: 'Rachmaninov', email: 'magi@gmail.com', sdate: '4/3/2012', edate: '4/3/2012' },
            { recid: 20, fname: 'Jill', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012', edate: '4/3/2012' },
            { recid: 21, fname: 'Frank', lname: 'Motzart', email: 'peterson@gmail.com', sdate: '4/3/2012', edate: '4/3/2012' },
            { recid: 22, fname: 'Peter', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012', edate: '8/3/2012' },
            { recid: 23, fname: 'Andrew', lname: 'Ottie', email: 'magi@gmail.com', sdate: '6/3/2012', edate: '4/19/2012' },
            { recid: 24, fname: 'Manny', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012', edate: '8/5/2012' },
            { recid: 25, fname: 'Ben', lname: 'Gatos', email: 'peter@gmail.com', sdate: '9/3/2012', edate: '4/3/2012' },
            { recid: 26, fname: 'Doer', lname: 'Welldo', email: 'magi@gmail.com', sdate: '4/3/2012', edate: '4/7/2012' },
            { recid: 27, fname: 'Shashi', lname: 'Bahh', email: 'jdoe@gmail.com', sdate: '4/3/2012', edate: '4/3/2012' },
            { recid: 28, fname: 'Av', lname: 'Rachmaninov', email: 'joe@gmail.com', sdate: '9/3/2012', edate: '12/6/2012' },
            { summary: true, 
              recid: 'S-1', lname: '<span style="float: right;">Total</span>', fname: '403',  
              email: '<span style="float: right;">Mean Date</span>', 
              sdate: '1/1/2012', edate: '2/1/2012'
            },
            { summary: true, 
              recid: 'S-2', lname: '<span style="float: right;">Average</span>', fname: '80',  
              email: '<span style="float: right;">Average Date</span>', 
              sdate: '1/1/2012', edate: '2/1/2012'
            }
        ]
    });    

});
