export type RouteQueryOptions = Record<string, any>;

export interface RouteDefinition<T extends string = string> {
  url: string;
  method: T;
}

export interface RouteFormDefinition<T extends string = string> {
  url: string;
  method: T;
}

export function queryParams(options?: RouteQueryOptions): string {
  if (!options || Object.keys(options).length === 0) return '';
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(options)) {
    if (value !== undefined && value !== null) params.append(key, String(value));
  }
  const query = params.toString();
  return query ? `?${query}` : '';
}

// AJOUT DE CETTE FONCTION POUR STOPPER LES ERREURS D'IMPORT
export function applyUrlDefaults(args: any): any {
    return args;
}