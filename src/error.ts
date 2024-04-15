import VError from "verror";

export class ParseChangelogActionTemplateError extends VError {
  constructor(
    options: Omit<VError.Options, "name">,
    message: string,
    ...params: unknown[]
  ) {
    super(
      { ...options, name: ParseChangelogActionTemplateError.name },
      message,
      ...params,
    );
  }
}
