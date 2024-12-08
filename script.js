
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-08 03:00:00", "b": 422.25}, {"a": "2024-12-08 03:05:00", "b": 411.75}, {"a": "2024-12-08 03:10:00", "b": 406.8}, {"a": "2024-12-08 03:15:00", "b": 466.8}, {"a": "2024-12-08 03:20:00", "b": 483.8}, {"a": "2024-12-08 03:25:00", "b": 486.0}, {"a": "2024-12-08 03:30:00", "b": 462.0}, {"a": "2024-12-08 03:35:00", "b": 444.75}, {"a": "2024-12-08 03:40:00", "b": 417.6}, {"a": "2024-12-08 03:45:00", "b": 404.0}, {"a": "2024-12-08 03:50:00", "b": 402.25}, {"a": "2024-12-08 03:55:00", "b": 402.5}, {"a": "2024-12-08 04:00:00", "b": 402.6}, {"a": "2024-12-08 04:05:00", "b": 402.3333333333333}, {"a": "2024-12-08 04:10:00", "b": 402.5}, {"a": "2024-12-08 04:15:00", "b": 401.75}, {"a": "2024-12-08 04:20:00", "b": 402.0}, {"a": "2024-12-08 04:25:00", "b": 402.5}, {"a": "2024-12-08 04:30:00", "b": 402.0}, {"a": "2024-12-08 04:35:00", "b": 403.0}, {"a": "2024-12-08 04:40:00", "b": 402.0}, {"a": "2024-12-08 04:45:00", "b": 401.6666666666667}, {"a": "2024-12-08 04:50:00", "b": 401.5}, {"a": "2024-12-08 04:55:00", "b": 402.75}, {"a": "2024-12-08 05:00:00", "b": 402.0}, {"a": "2024-12-08 05:05:00", "b": 402.5}, {"a": "2024-12-08 05:10:00", "b": 402.3333333333333}, {"a": "2024-12-08 05:15:00", "b": 401.5}, {"a": "2024-12-08 05:20:00", "b": 402.3333333333333}, {"a": "2024-12-08 05:25:00", "b": 402.2}, {"a": "2024-12-08 05:30:00", "b": 401.75}, {"a": "2024-12-08 05:35:00", "b": 403.8}, {"a": "2024-12-08 05:40:00", "b": 403.6666666666667}, {"a": "2024-12-08 05:45:00", "b": 404.6666666666667}, {"a": "2024-12-08 05:50:00", "b": 402.5}, {"a": "2024-12-08 05:55:00", "b": 404.0}, {"a": "2024-12-08 06:00:00", "b": 407.0}, {"a": "2024-12-08 06:05:00", "b": 405.8}, {"a": "2024-12-08 06:10:00", "b": 403.6}, {"a": "2024-12-08 06:15:00", "b": 403.5}, {"a": "2024-12-08 06:20:00", "b": 403.0}, {"a": "2024-12-08 06:25:00", "b": 403.5}, {"a": "2024-12-08 06:30:00", "b": 404.5}, {"a": "2024-12-08 06:35:00", "b": 401.8}, {"a": "2024-12-08 06:40:00", "b": 401.6666666666667}, {"a": "2024-12-08 06:45:00", "b": 401.0}, {"a": "2024-12-08 06:50:00", "b": 403.0}, {"a": "2024-12-08 06:55:00", "b": 401.5}, {"a": "2024-12-08 07:00:00", "b": 403.5}, {"a": "2024-12-08 07:10:00", "b": 405.0}, {"a": "2024-12-08 07:15:00", "b": 406.5}, {"a": "2024-12-08 07:20:00", "b": 408.3333333333333}, {"a": "2024-12-08 07:25:00", "b": 412.8}, {"a": "2024-12-08 07:30:00", "b": 430.5}, {"a": "2024-12-08 07:35:00", "b": 428.8}, {"a": "2024-12-08 07:40:00", "b": 431.5}, {"a": "2024-12-08 07:45:00", "b": 436.6}, {"a": "2024-12-08 07:50:00", "b": 442.0}, {"a": "2024-12-08 07:55:00", "b": 447.0}, {"a": "2024-12-08 08:00:00", "b": 444.8}, {"a": "2024-12-08 08:05:00", "b": 441.4}, {"a": "2024-12-08 08:10:00", "b": 437.6}, {"a": "2024-12-08 08:15:00", "b": 444.5}, {"a": "2024-12-08 08:20:00", "b": 467.4}, {"a": "2024-12-08 08:25:00", "b": 439.2}, {"a": "2024-12-08 08:30:00", "b": 428.8}, {"a": "2024-12-08 08:35:00", "b": 426.6}, {"a": "2024-12-08 08:40:00", "b": 432.4}, {"a": "2024-12-08 08:45:00", "b": 428.25}, {"a": "2024-12-08 08:50:00", "b": 431.0}, {"a": "2024-12-08 08:55:00", "b": 428.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    