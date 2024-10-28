
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-27 14:20:00", "b": 436.0}, {"a": "2024-10-27 14:25:00", "b": 435.0}, {"a": "2024-10-27 14:30:00", "b": 428.0}, {"a": "2024-10-27 14:35:00", "b": 423.0}, {"a": "2024-10-27 14:40:00", "b": 427.0}, {"a": "2024-10-27 14:45:00", "b": 427.25}, {"a": "2024-10-27 14:50:00", "b": 433.0}, {"a": "2024-10-27 14:55:00", "b": 425.6}, {"a": "2024-10-27 15:00:00", "b": 417.3333333333333}, {"a": "2024-10-27 15:05:00", "b": 421.0}, {"a": "2024-10-27 15:10:00", "b": 422.75}, {"a": "2024-10-27 15:15:00", "b": 410.0}, {"a": "2024-10-27 15:20:00", "b": 410.3333333333333}, {"a": "2024-10-27 15:25:00", "b": 407.6666666666667}, {"a": "2024-10-27 15:30:00", "b": 451.5}, {"a": "2024-10-27 15:35:00", "b": 479.8}, {"a": "2024-10-27 15:40:00", "b": 448.25}, {"a": "2024-10-27 15:45:00", "b": 452.0}, {"a": "2024-10-27 15:50:00", "b": 502.4}, {"a": "2024-10-27 15:55:00", "b": 422.75}, {"a": "2024-10-27 16:00:00", "b": 416.0}, {"a": "2024-10-27 16:05:00", "b": 416.2}, {"a": "2024-10-27 16:10:00", "b": 414.3333333333333}, {"a": "2024-10-27 16:15:00", "b": 411.0}, {"a": "2024-10-27 16:20:00", "b": 408.0}, {"a": "2024-10-27 16:25:00", "b": 404.4}, {"a": "2024-10-27 16:30:00", "b": 404.0}, {"a": "2024-10-27 16:35:00", "b": 403.0}, {"a": "2024-10-27 16:40:00", "b": 403.5}, {"a": "2024-10-27 16:45:00", "b": 403.0}, {"a": "2024-10-27 16:55:00", "b": 403.0}, {"a": "2024-10-27 17:00:00", "b": 402.6666666666667}, {"a": "2024-10-27 17:05:00", "b": 402.3333333333333}, {"a": "2024-10-27 17:10:00", "b": 402.4}, {"a": "2024-10-27 17:15:00", "b": 401.6}, {"a": "2024-10-27 17:20:00", "b": 401.8}, {"a": "2024-10-27 17:25:00", "b": 401.3333333333333}, {"a": "2024-10-27 17:30:00", "b": 401.6}, {"a": "2024-10-27 17:35:00", "b": 401.25}, {"a": "2024-10-27 17:40:00", "b": 402.5}, {"a": "2024-10-27 17:45:00", "b": 402.5}, {"a": "2024-10-27 17:50:00", "b": 400.75}, {"a": "2024-10-27 17:55:00", "b": 402.2}, {"a": "2024-10-27 18:00:00", "b": 401.75}, {"a": "2024-10-27 18:05:00", "b": 404.5}, {"a": "2024-10-27 18:10:00", "b": 404.0}, {"a": "2024-10-27 18:15:00", "b": 404.0}, {"a": "2024-10-27 18:20:00", "b": 405.0}, {"a": "2024-10-27 18:25:00", "b": 404.5}, {"a": "2024-10-27 18:30:00", "b": 403.5}, {"a": "2024-10-27 18:35:00", "b": 402.75}, {"a": "2024-10-27 18:40:00", "b": 412.2}, {"a": "2024-10-27 18:45:00", "b": 429.0}, {"a": "2024-10-27 18:50:00", "b": 446.6}, {"a": "2024-10-27 18:55:00", "b": 490.25}, {"a": "2024-10-27 19:00:00", "b": 511.6}, {"a": "2024-10-27 19:05:00", "b": 466.0}, {"a": "2024-10-27 19:10:00", "b": 438.2}, {"a": "2024-10-27 19:15:00", "b": 450.0}, {"a": "2024-10-27 19:20:00", "b": 467.4}, {"a": "2024-10-27 19:25:00", "b": 467.2}, {"a": "2024-10-27 19:30:00", "b": 449.2}, {"a": "2024-10-27 19:35:00", "b": 460.2}, {"a": "2024-10-27 19:40:00", "b": 479.0}, {"a": "2024-10-27 19:45:00", "b": 432.2}, {"a": "2024-10-27 19:50:00", "b": 426.8}, {"a": "2024-10-27 19:55:00", "b": 425.4}, {"a": "2024-10-27 20:00:00", "b": 431.0}, {"a": "2024-10-27 20:05:00", "b": 435.25}, {"a": "2024-10-27 20:10:00", "b": 442.6}, {"a": "2024-10-27 20:15:00", "b": 413.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    