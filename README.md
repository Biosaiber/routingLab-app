# Angular Routing & Navigation

## Project Notes

> These notes are my personal summary after finishing the Routing
> module. Their goal is to quickly remind me how Angular Routing works.

------------------------------------------------------------------------

## What I Learned

-   Create routes
-   Use RouterOutlet
-   Navigate with routerLink
-   Navigate programmatically with Router.navigate()
-   Use Location.back() and Location.forward()
-   Work with route parameters
-   Create child routes
-   Use redirects
-   Handle 404 pages with wildcard routes
-   Use withComponentInputBinding()

------------------------------------------------------------------------

## Navigation Flow

``` text
User action
    ↓
routerLink / Router.navigate()
    ↓
Angular Router
    ↓
URL changes
    ↓
Matching route
    ↓
Component
    ↓
@Input()
    ↓
Service
    ↓
HTML
```

------------------------------------------------------------------------

## Key Concepts

-   **RouterOutlet** renders the component that matches the current URL.
-   **routerLink** is used inside HTML templates.
-   **Router.navigate()** is used inside TypeScript.
-   **withComponentInputBinding()** automatically binds route parameters
    to `@Input()`.
-   **Wildcard routes** should always be the last route.
-   **Redirects** send the user to another route.
-   **Child routes** allow nested navigation.

------------------------------------------------------------------------

## Things I Want to Remember

-   A URL is not only an address. It can also provide data to a
    component.
-   The Router does not change the page. It changes the component inside
    RouterOutlet.
-   Services store data.
-   Components decide what should be displayed.
-   Use `routerLink` in HTML.
-   Use `Router.navigate()` in TypeScript.

------------------------------------------------------------------------

## Personal Note

Home → Post creates a new `PostComponent`.

Post/1 → Post/2 reuses the existing `PostComponent`, so `ngOnInit()` is
not executed again.

------------------------------------------------------------------------
(svk)
## Projektové poznámky

> Tieto poznámky som si pripravil po dokončení projektu. Ich cieľom nie
> je nahradiť dokumentáciu Angularu, ale pripomenúť, ako Routing funguje.

------------------------------------------------------------------------

# Čo som sa naučil

-   vytvoriť routes
-   používať RouterOutlet
-   používať routerLink
-   používať Router.navigate()
-   používať Location.back() a Location.forward()
-   pracovať s route parametrami
-   vytvárať child routes
-   používať redirect
-   vytvoriť 404 stránku pomocou wildcard route
-   používať withComponentInputBinding()

------------------------------------------------------------------------

# Tok navigácie

    Klik
      │
      ▼
    routerLink alebo Router.navigate()
      │
      ▼
    Angular Router
      │
      ▼
    URL
      │
      ▼
    Routes
      │
      ▼
    Komponent
      │
      ▼
    @Input()
      │
      ▼
    Service
      │
      ▼
    HTML

------------------------------------------------------------------------

# RouterOutlet

RouterOutlet je miesto, kde Angular zobrazuje komponent podľa aktuálnej
URL.

------------------------------------------------------------------------

# routerLink

Používam ho v HTML.

``` html
<a [routerLink]="['/post', post.id]">
```

------------------------------------------------------------------------

# Router.navigate()

Používam ho v TypeScripte.

``` ts
this.router.navigate(['/post', post.id]);
```

Použil som ho pri tlačidle Random Post.

------------------------------------------------------------------------

# Route Parameters

URL:

    /post/5

↓

    @Input() id

↓

    getPostById(id)

------------------------------------------------------------------------

# withComponentInputBinding()

Automaticky prenesie route parametre do @Input().

------------------------------------------------------------------------

# Redirect

Používam ho na presmerovanie používateľa.

------------------------------------------------------------------------

# Wildcard

Slúži na zachytenie neexistujúcich URL.

Musí byť posledná route.

------------------------------------------------------------------------

# Child Routes

Použil som ich na komentáre článku.

    /post/1/comments

------------------------------------------------------------------------

# Location Service

    back()

vráti používateľa späť.

    forward()

ho posunie dopredu.

------------------------------------------------------------------------

# Čo som si zapamätal

-   URL nie je iba adresa.
-   URL môže obsahovať údaje pre komponent.
-   Router nemení stránku. Mení komponent v RouterOutlet.
-   Service uchováva dáta.
-   Komponent rozhoduje, čo zobrazí.
-   routerLink používam v HTML.
-   Router.navigate() používam v TypeScripte.
-   withComponentInputBinding() prenesie route parametre do @Input().
-   Wildcard route patrí vždy na koniec.
-   Redirect slúži na presmerovanie.

------------------------------------------------------------------------

# Poznámka

Keď idem z Home na Post, Angular vytvorí nový PostComponent.

Keď idem z Post/1 na Post/2, Angular znovu použije existujúci
PostComponent. Preto sa ngOnInit() nespustí znova.