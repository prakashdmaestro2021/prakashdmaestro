$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Tooltip');
        comp_comp1.code = '<div class="parallax-container valign-wrapper"> \
    <div class="parallax"> \
        <!-- //<img src="assets/img/background2.jpg" alt="Unsplashed background img 2">  -->\
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.876066174476!2d76.20885877452878!3d11.703189341417366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba609005922fa11%3A0xd0a97be928e88ad9!2sMisty%20Dews%20Homestay!5e0!3m2!1sen!2sin!4v1732382389550!5m2!1sen!2sin" width="400" height="380" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\
    </div>\
    <div class="section no-pad-bot right"> \
        <div class="container right"> \
            <div class="row right"> \
                <div class="row right"> \
                    <!-- <div class="parallax center">  -->\
                    <div class="icon-block center">\
                        <div class="col-lg-7 col-xl-100 right"> \
                            <h1 class="header col s12 light">Contact US</h1>\
                            <h3 class="header col s12 light">MISTY DEWS</h3>\
                            <h4 class="header col s12 light">Home Stay</h4>\
                            <h5 class="header col s12 light">Vakery</h5>\
                            <h5 class="header col s12 light">Wayanad</h5>\
                            <h5 class="header col s12 light">Kerala</h5>\
                            <h6 class="header col s12 light">E-Mail: mistydewswayanad@gmail.com</h6>\
                            <h6 class="header col s12 light">Mobile:&nbsp;+91 9847179374</h6>\
                            <!-- </div> -->\
                        </div>\
                    </div>\
                </div>\
            </div>             \
        </div>         \
    </div>     \
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / Tooltip');
        comp_comp2.code = '<div class="parallax-container valign-wrapper"> \
    <div class="parallax"> \
        <!-- //<img src="assets/img/background2.jpg" alt="Unsplashed background img 2">  -->\
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.876066174476!2d76.20885877452878!3d11.703189341417366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba609005922fa11%3A0xd0a97be928e88ad9!2sMisty%20Dews%20Homestay!5e0!3m2!1sen!2sin!4v1732382389550!5m2!1sen!2sin" width="400" height="380" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\
    </div>\
    <div class="section no-pad-bot right"> \
        <div class="container right"> \
            <div class="row right"> \
                <div class="row right"> \
                    <!-- <div class="parallax center">  -->\
                    <div class="icon-block center">\
                        <div class="col-lg-7 col-xl-100 right"> \
                            <h1 class="header col s12 light">Contact US</h1>\
                            <h3 class="header col s12 light">MISTY DEWS</h3>\
                            <h4 class="header col s12 light">Home Stay</h4>\
                            <h5 class="header col s12 light">Vakery</h5>\
                            <h5 class="header col s12 light">Wayanad</h5>\
                            <h5 class="header col s12 light">Kerala</h5>\
                            <h6 class="header col s12 light">E-Mail: mistydewswayanad@gmail.com</h6>\
                            <h6 class="header col s12 light">Mobile:&nbsp;+91 9847179374</h6>\
                            <!-- </div> -->\
                        </div>\
                    </div>\
                </div>\
            </div>             \
        </div>         \
    </div>     \
</div>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2]);

        f.addLibSection(section);
   });
});