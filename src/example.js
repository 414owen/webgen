
window.onload = function() {

var nut = nutmeg();
for (var key in nut) {
    eval('var ' + key + '=nut[key];');
}

var foreground = '#000';
var background = '#f5f5f5';

var style = mergeStyle({
    transition: {
        transition: 'all 0.3s ease'
    },
    base: {
        border: '0',
        color: foreground,
        margin: '0',
        padding: '0',
        fontFamily: 'Raleway',
        fontWeight: '300',
        lineHeight: '1.15',
        display: 'block',
    },
    icon: {
        depends: ['transition'],
        fontSize: '2rem',
        width: '4rem',
        height: '3.5rem',
        lineHeight: '3.5rem',
        hover: {
            fontSize: '2.5rem',
            color: background,
            backgroundColor: foreground
        }
    },
    body: {
        depends: ['base'],
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: background
    },
    fill: {
        width: '100%',
        height: '100%'
    },
    flex: {
        display: 'flex',
    },
    centerHor: {
        depends: ['flex'],
        justifyContent: 'center',
        textAlign: 'center'
    },
    main: {
        height: '7rem',
    },
    center: {
        depends: ['fill', 'centerHor'],
        alignItems: 'center'
    },
    disperse: {
        depends: ['fill', 'centerHor'],
        justifyContent: 'space-around'
    },
    inline: {
        depends: ['base'],
        display: 'inline-block'
    },
    hline: {
        depends: ['lower'],
        borderTop: '1px solid'
    },
    lower: {
        marginTop: '0.5rem'
    }
});

body.style(style.body)(
    div.style(style.center)(
        div.style(style.main)(
            div('This Is Nutmeg').style({fontSize: '3rem'}),
            div.style(style.hline),
            div.style(style.centerHor)(
               [['github', 'https://github.com/414owen/Nutmeg'],
                ['linkedin', 'https://www.linkedin.com/in/owen-shepherd-50418b110'],
                ['envelope', 'mailto:414o' + 'wen@gm' + 'ail.com']]
                .map(function(button, ind) {
                    return div(i.class(['fa', 'fa-' + button[0]])
                            .link(button[1])
                            .onmouseover(function() {console.log(button[0]);}).style(style.icon));
                })
            )
        )
    )
)

};