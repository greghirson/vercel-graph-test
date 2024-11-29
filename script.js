
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-28 19:00:00", "b": 415.0}, {"a": "2024-11-28 19:05:00", "b": 435.4}, {"a": "2024-11-28 19:10:00", "b": 420.2}, {"a": "2024-11-28 19:15:00", "b": 420.2}, {"a": "2024-11-28 19:20:00", "b": 426.2}, {"a": "2024-11-28 19:25:00", "b": 499.6}, {"a": "2024-11-28 19:30:00", "b": 419.75}, {"a": "2024-11-28 19:35:00", "b": 433.0}, {"a": "2024-11-28 19:40:00", "b": 493.4}, {"a": "2024-11-28 19:45:00", "b": 483.8}, {"a": "2024-11-28 19:50:00", "b": 492.8}, {"a": "2024-11-28 19:55:00", "b": 450.6}, {"a": "2024-11-28 20:00:00", "b": 462.8}, {"a": "2024-11-28 20:05:00", "b": 485.6}, {"a": "2024-11-28 20:10:00", "b": 420.75}, {"a": "2024-11-28 20:15:00", "b": 404.3333333333333}, {"a": "2024-11-28 20:20:00", "b": 406.3333333333333}, {"a": "2024-11-28 20:25:00", "b": 408.0}, {"a": "2024-11-28 20:30:00", "b": 408.0}, {"a": "2024-11-28 20:35:00", "b": 409.0}, {"a": "2024-11-28 20:40:00", "b": 403.0}, {"a": "2024-11-28 20:45:00", "b": 416.25}, {"a": "2024-11-28 20:50:00", "b": 407.4}, {"a": "2024-11-28 20:55:00", "b": 404.5}, {"a": "2024-11-28 21:00:00", "b": 407.0}, {"a": "2024-11-28 21:05:00", "b": 440.6666666666667}, {"a": "2024-11-28 21:10:00", "b": 417.5}, {"a": "2024-11-28 21:15:00", "b": 403.25}, {"a": "2024-11-28 21:20:00", "b": 407.5}, {"a": "2024-11-28 21:30:00", "b": 415.8}, {"a": "2024-11-28 21:35:00", "b": 407.6}, {"a": "2024-11-28 21:40:00", "b": 406.5}, {"a": "2024-11-28 21:45:00", "b": 407.5}, {"a": "2024-11-28 21:50:00", "b": 408.0}, {"a": "2024-11-28 21:55:00", "b": 406.0}, {"a": "2024-11-28 22:00:00", "b": 410.3333333333333}, {"a": "2024-11-28 22:05:00", "b": 462.2}, {"a": "2024-11-28 22:10:00", "b": 452.8}, {"a": "2024-11-28 22:15:00", "b": 436.0}, {"a": "2024-11-28 22:20:00", "b": 421.0}, {"a": "2024-11-28 22:25:00", "b": 488.75}, {"a": "2024-11-28 22:30:00", "b": 441.2}, {"a": "2024-11-28 22:35:00", "b": 415.5}, {"a": "2024-11-28 22:40:00", "b": 422.6}, {"a": "2024-11-28 22:45:00", "b": 459.8}, {"a": "2024-11-28 22:50:00", "b": 453.0}, {"a": "2024-11-28 22:55:00", "b": 445.8}, {"a": "2024-11-28 23:00:00", "b": 448.6}, {"a": "2024-11-28 23:05:00", "b": 455.0}, {"a": "2024-11-28 23:10:00", "b": 488.8}, {"a": "2024-11-28 23:15:00", "b": 443.2}, {"a": "2024-11-28 23:20:00", "b": 443.75}, {"a": "2024-11-28 23:25:00", "b": 525.2}, {"a": "2024-11-28 23:30:00", "b": 471.8}, {"a": "2024-11-28 23:35:00", "b": 440.2}, {"a": "2024-11-28 23:40:00", "b": 443.0}, {"a": "2024-11-28 23:45:00", "b": 536.0}, {"a": "2024-11-28 23:50:00", "b": 465.0}, {"a": "2024-11-28 23:55:00", "b": 447.8}, {"a": "2024-11-29 00:00:00", "b": 439.75}, {"a": "2024-11-29 00:05:00", "b": 467.8}, {"a": "2024-11-29 00:10:00", "b": 456.25}, {"a": "2024-11-29 00:15:00", "b": 514.0}, {"a": "2024-11-29 00:20:00", "b": 532.0}, {"a": "2024-11-29 00:25:00", "b": 547.8}, {"a": "2024-11-29 00:30:00", "b": 640.0}, {"a": "2024-11-29 00:35:00", "b": 685.2}, {"a": "2024-11-29 00:40:00", "b": 676.4}, {"a": "2024-11-29 00:45:00", "b": 674.25}, {"a": "2024-11-29 00:50:00", "b": 671.6}, {"a": "2024-11-29 00:55:00", "b": 569.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    