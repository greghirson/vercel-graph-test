
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-03 13:00:00", "b": 451.0}, {"a": "2024-12-03 13:05:00", "b": 518.0}, {"a": "2024-12-03 13:10:00", "b": 498.25}, {"a": "2024-12-03 13:15:00", "b": 513.6}, {"a": "2024-12-03 13:20:00", "b": 518.8}, {"a": "2024-12-03 13:25:00", "b": 508.8}, {"a": "2024-12-03 13:30:00", "b": 460.0}, {"a": "2024-12-03 13:35:00", "b": 450.6}, {"a": "2024-12-03 13:40:00", "b": 417.75}, {"a": "2024-12-03 13:45:00", "b": 411.8}, {"a": "2024-12-03 13:50:00", "b": 429.0}, {"a": "2024-12-03 13:55:00", "b": 432.0}, {"a": "2024-12-03 14:00:00", "b": 425.75}, {"a": "2024-12-03 14:05:00", "b": 426.2}, {"a": "2024-12-03 14:10:00", "b": 422.75}, {"a": "2024-12-03 14:15:00", "b": 425.2}, {"a": "2024-12-03 14:20:00", "b": 418.8}, {"a": "2024-12-03 14:25:00", "b": 419.2}, {"a": "2024-12-03 14:30:00", "b": 421.4}, {"a": "2024-12-03 14:35:00", "b": 409.75}, {"a": "2024-12-03 14:40:00", "b": 411.0}, {"a": "2024-12-03 14:45:00", "b": 407.6666666666667}, {"a": "2024-12-03 14:50:00", "b": 408.5}, {"a": "2024-12-03 14:55:00", "b": 409.4}, {"a": "2024-12-03 15:00:00", "b": 406.0}, {"a": "2024-12-03 15:05:00", "b": 406.0}, {"a": "2024-12-03 15:10:00", "b": 457.2}, {"a": "2024-12-03 15:15:00", "b": 701.2}, {"a": "2024-12-03 15:20:00", "b": 451.4}, {"a": "2024-12-03 15:25:00", "b": 403.5}, {"a": "2024-12-03 15:30:00", "b": 402.2}, {"a": "2024-12-03 15:35:00", "b": 402.5}, {"a": "2024-12-03 15:40:00", "b": 402.0}, {"a": "2024-12-03 15:45:00", "b": 402.25}, {"a": "2024-12-03 15:50:00", "b": 400.6666666666667}, {"a": "2024-12-03 15:55:00", "b": 401.5}, {"a": "2024-12-03 16:00:00", "b": 400.3333333333333}, {"a": "2024-12-03 16:05:00", "b": 402.6666666666667}, {"a": "2024-12-03 16:10:00", "b": 402.75}, {"a": "2024-12-03 16:15:00", "b": 403.0}, {"a": "2024-12-03 16:20:00", "b": 403.5}, {"a": "2024-12-03 16:25:00", "b": 402.0}, {"a": "2024-12-03 16:30:00", "b": 401.0}, {"a": "2024-12-03 16:35:00", "b": 402.2}, {"a": "2024-12-03 16:40:00", "b": 402.25}, {"a": "2024-12-03 16:45:00", "b": 404.0}, {"a": "2024-12-03 16:50:00", "b": 406.0}, {"a": "2024-12-03 16:55:00", "b": 405.3333333333333}, {"a": "2024-12-03 17:00:00", "b": 407.3333333333333}, {"a": "2024-12-03 17:05:00", "b": 427.4}, {"a": "2024-12-03 17:10:00", "b": 425.75}, {"a": "2024-12-03 17:15:00", "b": 414.2}, {"a": "2024-12-03 17:20:00", "b": 423.75}, {"a": "2024-12-03 17:25:00", "b": 445.2}, {"a": "2024-12-03 17:30:00", "b": 446.75}, {"a": "2024-12-03 17:35:00", "b": 424.75}, {"a": "2024-12-03 17:40:00", "b": 416.6}, {"a": "2024-12-03 17:45:00", "b": 416.75}, {"a": "2024-12-03 17:50:00", "b": 409.25}, {"a": "2024-12-03 17:55:00", "b": 408.5}, {"a": "2024-12-03 18:00:00", "b": 411.2}, {"a": "2024-12-03 18:05:00", "b": 416.6}, {"a": "2024-12-03 18:10:00", "b": 407.5}, {"a": "2024-12-03 18:15:00", "b": 407.5}, {"a": "2024-12-03 18:20:00", "b": 409.0}, {"a": "2024-12-03 18:25:00", "b": 411.0}, {"a": "2024-12-03 18:30:00", "b": 407.6666666666667}, {"a": "2024-12-03 18:35:00", "b": 408.4}, {"a": "2024-12-03 18:40:00", "b": 408.0}, {"a": "2024-12-03 18:45:00", "b": 414.4}, {"a": "2024-12-03 18:50:00", "b": 422.6}, {"a": "2024-12-03 18:55:00", "b": 423.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    