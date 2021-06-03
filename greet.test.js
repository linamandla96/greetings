describe('Greet names with different languages', function () {
    it('should greet Lina in english', function () {

        assert.equal(greet().greetpeople('Lina', 'English'), 'Hello,Lina');


    });
    it('should greet Buhle in IsiXhosa', function () {
        assert.equal(greet().greetpeople('Buhle', 'Isixhosa'), 'Molo,Buhle');


    });
    it('should greet Nzwakie in Sesotho', function () {
        assert.equal(greet().greetpeople('Nzwakie', 'Sesotho'), 'Dumela,Nzwakie');


    });
    describe('Store names that are greeted', function () {
        it('should be able to store lina when she/he greeted', function () {

            assert.deepEqual(greet().greetpeople([{ names: "Jodie" }]));


        });
        it('should be able to store Buhle when she/he greeted', function () {

            assert.deepEqual(greet().greetpeople([{ names: "Buhle" }]));


        });
        it('should be able to store Cinga  when she/he greeted', function () {

            assert.deepEqual(greet().greetpeople([{ names: "Cinga" }]));


        });
        it('should be able to store Nzwakie  when she/he greeted', function () {

            assert.deepEqual(greet().greetpeople([{ names: "Nzwakie" }]));


        });
        it('should be able to store all the names that are  greeted', function () {

            assert.deepEqual(greet().greetpeople([{ names: "Nzwakie", names: "Jodie", names: "Buhle" }]));

        });

    });
    describe('Counter names that are greeted', function () {
        it('should be able to count name that is greeted', function () {

            assert.deepEqual(greet().storeNames([{names:"Jodie"},1]));
            

        });
        it('should be able to count all the names that are  greeted', function () {

            assert.deepEqual(greet().storeNames([{ names: "Nzwakie", names: "Jodie", names: "Buhle" }, 3]));

        });
        it('should be able to greet the name that is repeated but it must not count it again', function () {

            assert.deepEqual(greet().storeNames([{ names: "Nzwakie", names: "Jodie", names: "Buhle", names: "Buhle" }, 3]));

        });
    });
    describe('Error messeges', function () {
        it('should be able to show error messege when there is no name entered', function () {

            assert.equal(greet().errorMesseges(""), " Please enter your name!");


        });
        it('should be able to show error messege when there is no language selected', function () {

            assert.equal(greet().errors(""), "Please select language!");


        });
        it('should be able to show error messege when there is no language selected and name entered', function () {

            assert.equal(greet().errorMes("", ""), "Please enter name and select language!");


        });
    });
});