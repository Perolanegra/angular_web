import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CacheRouteReuseStrategy implements RouteReuseStrategy {
    storedRouteHandles = new Map<string, DetachedRouteHandle>();
    alowRetrieveCache = {
        'meu-carrinho': false
    };

    rotas: { before: string, current: string, path: string }[] = [
        { 'before': 'login', 'current': 'meu-carrinho', 'path': 'meu-carrinho' }
    ]


    shouldReuseRoute(pBefore: ActivatedRouteSnapshot, pCurrent: ActivatedRouteSnapshot): boolean {
        for(let rota of this.rotas) {
            this.alowRetrieveCache[rota.path] = false;
            if(this.getPath(pBefore) === rota.before && this.getPath(pCurrent) === rota.current) {
                this.alowRetrieveCache[rota.path] = true;
                break;
            }
        }
        return pBefore.routeConfig === pCurrent.routeConfig;
    }

    retrieve(pRoute: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return this.storedRouteHandles.get(this.getPath(pRoute)) as DetachedRouteHandle;
    }

    shouldAttach(pRoute: ActivatedRouteSnapshot): boolean {
        const path = this.getPath(pRoute);
        if(this.alowRetrieveCache[path]) {
            return this.storedRouteHandles.has(this.getPath(pRoute));
        }
        return false;
    }

    shouldDetach(pRoute: ActivatedRouteSnapshot): boolean {
        const path = this.getPath(pRoute);
        if(this.alowRetrieveCache.hasOwnProperty(path)) {
            return true;
        }
        return false;
    }    
    
    store(pRoute: ActivatedRouteSnapshot, pDetachedTree: DetachedRouteHandle): void {
        this.storedRouteHandles.set(this.getPath(pRoute), pDetachedTree);
    }

    private getPath(pRoute: ActivatedRouteSnapshot): string {
        if(pRoute.routeConfig !== null && pRoute.routeConfig.path !== null) {
            return pRoute.routeConfig.path;
        }

        return '';
    }
    
}