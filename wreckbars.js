! function() {
    var S = String.prototype,
        M = [],
        i = 0,
        r = "replace",
        m = "match";
    S.O = function( c, s, x ) {
        return this[ r ]( x = /{ *(\w+) *}([\s\S]*?){\/ *\1 *}/g, function( p, a, b ) {
            if ( s = "", c[ a ] )
                for ( i in c[ a ] ) s += b.T( "c['" + a + "'][" + i + "]", c ), s = s.I( "c." + a + "[" + i + "].", c ), s[ m ]( x ) && ( s = s.O( c[ a ][ i ] ) );
            return s
        } )
    }, S.I = function( V, c, w, v, e ) {
        return this[ r ]( /{#(\d)#}([\s\S]*){#\/\1#}/g, function( p, a, b, f ) {
            a = M[ +a ], w = a[ m ]( /^!|^not */ ), v = V, w && ( a = a[ r ]( w[ 0 ], "" ), v = "!" + v );
            try {
                f = eval( v + a )
            } catch ( e ) {
                f = 0
            }
            return b[ m ]( e = /{#else}[\s\S]*/ ) ? b[ r ]( f ? e : /[\s\S]*\{#else}/, "" ) : f ? b : ""
        } )
    }, S.T = function( V, c, t ) {
        return this[ r ]( /{+ *([A-Za-z0-9_.]+) *}+/g, function( p, $1, f ) {
            try {
                f = eval( !V.big || $1[ m ]( t = /\./g ) ? V + "['" + $1[ r ]( t, "']['" ) + "']" : V )
            } catch ( e ) {}
            return f = f ? f.big ? f : "string" != typeof f[ $1 ] ? p : f[ $1 ] : "", "{" == p[ 1 ] ? new Option( f ).innerHTML : f
        } )
    }, S.tpl = function( c, s ) {
        for ( s = this[ r ]( /\{#if *(.*?) *}/g, function( p, a ) {
            return M[ i ] = a, "{#" + i+++"#}"
        } ), i = M.length; i--; ) s = s[ r ]( RegExp( "{#" + i + "#}([\\s\\S]*?){#\\/if}", "g" ), "{#" + i + "#}$1{#/" + i + "#}" );
        return s.O( c, 1 ).T( "c", c ).I( "c.", c )
    }
}();