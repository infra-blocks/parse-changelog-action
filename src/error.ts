import VError from "verror";

export class DockerTypescriptActionTemplateError extends VError {
  constructor(
    options: Omit<VError.Options, "name">,
    message: string,
    ...params: unknown[]
  ) {
    super(
      { ...options, name: DockerTypescriptActionTemplateError.name },
      message,
      ...params,
    );
  }
}
