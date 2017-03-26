export var changeBody = (body = {}) => {
    return {
        type: "CHANGE_BODY",
        payload: body // {parameterName: "parameter name", parameterValue: "parameter value"}
    };
};

export var changeUrl = (url = "") => {
    return {
        type: "CHANGE_URL",
        payload: url
    };
};

export var apiRequest = (requestUrl, requestOptions) => {
    return {
        type: "API_REQUEST",
        payload: {
            url: requestUrl,
            options: requestOptions
        }
    };
}
