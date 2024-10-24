
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-24 03:50:00", "b": 505.0}, {"a": "2024-10-24 03:55:00", "b": 503.0}, {"a": "2024-10-24 04:00:00", "b": 494.8}, {"a": "2024-10-24 04:05:00", "b": 503.0}, {"a": "2024-10-24 04:10:00", "b": 509.4}, {"a": "2024-10-24 04:15:00", "b": 492.8}, {"a": "2024-10-24 04:20:00", "b": 503.25}, {"a": "2024-10-24 04:25:00", "b": 493.8}, {"a": "2024-10-24 04:30:00", "b": 483.25}, {"a": "2024-10-24 04:35:00", "b": 495.5}, {"a": "2024-10-24 04:40:00", "b": 486.75}, {"a": "2024-10-24 04:45:00", "b": 481.6}, {"a": "2024-10-24 04:50:00", "b": 487.75}, {"a": "2024-10-24 04:55:00", "b": 484.25}, {"a": "2024-10-24 05:00:00", "b": 481.25}, {"a": "2024-10-24 05:05:00", "b": 475.25}, {"a": "2024-10-24 05:10:00", "b": 467.0}, {"a": "2024-10-24 05:15:00", "b": 479.5}, {"a": "2024-10-24 05:20:00", "b": 474.0}, {"a": "2024-10-24 05:25:00", "b": 465.4}, {"a": "2024-10-24 05:30:00", "b": 473.6}, {"a": "2024-10-24 05:35:00", "b": 459.5}, {"a": "2024-10-24 05:40:00", "b": 450.4}, {"a": "2024-10-24 05:45:00", "b": 460.5}, {"a": "2024-10-24 05:50:00", "b": 452.0}, {"a": "2024-10-24 05:55:00", "b": 434.6}, {"a": "2024-10-24 06:00:00", "b": 413.5}, {"a": "2024-10-24 06:05:00", "b": 408.5}, {"a": "2024-10-24 06:10:00", "b": 408.5}, {"a": "2024-10-24 06:15:00", "b": 407.0}, {"a": "2024-10-24 06:20:00", "b": 404.0}, {"a": "2024-10-24 06:25:00", "b": 401.8}, {"a": "2024-10-24 06:30:00", "b": 402.0}, {"a": "2024-10-24 06:35:00", "b": 402.4}, {"a": "2024-10-24 06:40:00", "b": 401.8}, {"a": "2024-10-24 06:45:00", "b": 402.0}, {"a": "2024-10-24 06:50:00", "b": 401.2}, {"a": "2024-10-24 06:55:00", "b": 401.3333333333333}, {"a": "2024-10-24 07:00:00", "b": 401.6666666666667}, {"a": "2024-10-24 07:05:00", "b": 401.75}, {"a": "2024-10-24 07:10:00", "b": 403.6}, {"a": "2024-10-24 07:15:00", "b": 401.8}, {"a": "2024-10-24 07:20:00", "b": 400.75}, {"a": "2024-10-24 07:25:00", "b": 401.5}, {"a": "2024-10-24 07:30:00", "b": 402.2}, {"a": "2024-10-24 07:35:00", "b": 401.6666666666667}, {"a": "2024-10-24 07:40:00", "b": 405.0}, {"a": "2024-10-24 07:45:00", "b": 412.2}, {"a": "2024-10-24 07:50:00", "b": 416.4}, {"a": "2024-10-24 07:55:00", "b": 437.4}, {"a": "2024-10-24 08:00:00", "b": 453.0}, {"a": "2024-10-24 08:05:00", "b": 463.4}, {"a": "2024-10-24 08:10:00", "b": 463.8}, {"a": "2024-10-24 08:15:00", "b": 450.5}, {"a": "2024-10-24 08:20:00", "b": 454.0}, {"a": "2024-10-24 08:25:00", "b": 445.6}, {"a": "2024-10-24 08:30:00", "b": 434.25}, {"a": "2024-10-24 08:35:00", "b": 425.8}, {"a": "2024-10-24 08:40:00", "b": 423.2}, {"a": "2024-10-24 08:45:00", "b": 420.4}, {"a": "2024-10-24 08:50:00", "b": 419.5}, {"a": "2024-10-24 08:55:00", "b": 412.25}, {"a": "2024-10-24 09:00:00", "b": 413.0}, {"a": "2024-10-24 09:05:00", "b": 413.0}, {"a": "2024-10-24 09:10:00", "b": 408.5}, {"a": "2024-10-24 09:15:00", "b": 409.0}, {"a": "2024-10-24 09:25:00", "b": 408.5}, {"a": "2024-10-24 09:30:00", "b": 408.5}, {"a": "2024-10-24 09:35:00", "b": 414.25}, {"a": "2024-10-24 09:40:00", "b": 409.6666666666667}, {"a": "2024-10-24 09:45:00", "b": 408.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    