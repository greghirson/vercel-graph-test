
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-22 20:10:00", "b": 643.6}, {"a": "2024-10-22 20:15:00", "b": 652.0}, {"a": "2024-10-22 20:20:00", "b": 662.75}, {"a": "2024-10-22 20:25:00", "b": 659.75}, {"a": "2024-10-22 20:30:00", "b": 661.0}, {"a": "2024-10-22 20:35:00", "b": 637.5}, {"a": "2024-10-22 20:40:00", "b": 635.2}, {"a": "2024-10-22 20:45:00", "b": 618.6}, {"a": "2024-10-22 20:50:00", "b": 606.0}, {"a": "2024-10-22 20:55:00", "b": 603.4}, {"a": "2024-10-22 21:00:00", "b": 620.8}, {"a": "2024-10-22 21:05:00", "b": 591.0}, {"a": "2024-10-22 21:10:00", "b": 553.6}, {"a": "2024-10-22 21:15:00", "b": 537.2}, {"a": "2024-10-22 21:20:00", "b": 527.2}, {"a": "2024-10-22 21:25:00", "b": 525.0}, {"a": "2024-10-22 21:30:00", "b": 514.6}, {"a": "2024-10-22 21:35:00", "b": 490.8}, {"a": "2024-10-22 21:40:00", "b": 458.4}, {"a": "2024-10-22 21:45:00", "b": 419.8}, {"a": "2024-10-22 21:50:00", "b": 405.4}, {"a": "2024-10-22 21:55:00", "b": 402.0}, {"a": "2024-10-22 22:00:00", "b": 403.0}, {"a": "2024-10-22 22:05:00", "b": 402.25}, {"a": "2024-10-22 22:10:00", "b": 401.75}, {"a": "2024-10-22 22:15:00", "b": 401.5}, {"a": "2024-10-22 22:20:00", "b": 402.25}, {"a": "2024-10-22 22:25:00", "b": 400.5}, {"a": "2024-10-22 22:30:00", "b": 401.6}, {"a": "2024-10-22 22:35:00", "b": 401.0}, {"a": "2024-10-22 22:40:00", "b": 402.6666666666667}, {"a": "2024-10-22 22:45:00", "b": 401.8}, {"a": "2024-10-22 22:50:00", "b": 403.0}, {"a": "2024-10-22 22:55:00", "b": 403.0}, {"a": "2024-10-22 23:00:00", "b": 402.3333333333333}, {"a": "2024-10-22 23:05:00", "b": 402.5}, {"a": "2024-10-22 23:10:00", "b": 402.4}, {"a": "2024-10-22 23:15:00", "b": 404.0}, {"a": "2024-10-22 23:20:00", "b": 402.0}, {"a": "2024-10-22 23:25:00", "b": 403.5}, {"a": "2024-10-22 23:30:00", "b": 404.5}, {"a": "2024-10-22 23:35:00", "b": 403.75}, {"a": "2024-10-22 23:40:00", "b": 401.6}, {"a": "2024-10-22 23:45:00", "b": 402.0}, {"a": "2024-10-22 23:50:00", "b": 404.3333333333333}, {"a": "2024-10-22 23:55:00", "b": 407.0}, {"a": "2024-10-23 00:00:00", "b": 401.5}, {"a": "2024-10-23 00:05:00", "b": 401.8}, {"a": "2024-10-23 00:10:00", "b": 402.0}, {"a": "2024-10-23 00:15:00", "b": 403.5}, {"a": "2024-10-23 00:20:00", "b": 401.75}, {"a": "2024-10-23 00:25:00", "b": 401.75}, {"a": "2024-10-23 00:30:00", "b": 403.0}, {"a": "2024-10-23 00:35:00", "b": 403.0}, {"a": "2024-10-23 00:40:00", "b": 403.5}, {"a": "2024-10-23 00:45:00", "b": 402.0}, {"a": "2024-10-23 00:50:00", "b": 404.0}, {"a": "2024-10-23 00:55:00", "b": 404.0}, {"a": "2024-10-23 01:00:00", "b": 402.0}, {"a": "2024-10-23 01:05:00", "b": 404.5}, {"a": "2024-10-23 01:10:00", "b": 405.0}, {"a": "2024-10-23 01:15:00", "b": 403.6666666666667}, {"a": "2024-10-23 01:20:00", "b": 406.5}, {"a": "2024-10-23 01:25:00", "b": 406.5}, {"a": "2024-10-23 01:30:00", "b": 404.6666666666667}, {"a": "2024-10-23 01:35:00", "b": 406.0}, {"a": "2024-10-23 01:40:00", "b": 405.3333333333333}, {"a": "2024-10-23 01:45:00", "b": 404.4}, {"a": "2024-10-23 01:50:00", "b": 405.5}, {"a": "2024-10-23 01:55:00", "b": 406.0}, {"a": "2024-10-23 02:00:00", "b": 406.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    