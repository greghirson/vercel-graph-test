
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-09 02:40:00", "b": 443.2}, {"a": "2024-11-09 02:45:00", "b": 427.8}, {"a": "2024-11-09 02:50:00", "b": 424.2}, {"a": "2024-11-09 02:55:00", "b": 426.0}, {"a": "2024-11-09 03:00:00", "b": 423.75}, {"a": "2024-11-09 03:05:00", "b": 417.4}, {"a": "2024-11-09 03:10:00", "b": 417.75}, {"a": "2024-11-09 03:15:00", "b": 432.0}, {"a": "2024-11-09 03:20:00", "b": 423.6}, {"a": "2024-11-09 03:25:00", "b": 425.6}, {"a": "2024-11-09 03:30:00", "b": 422.6}, {"a": "2024-11-09 03:35:00", "b": 417.5}, {"a": "2024-11-09 03:40:00", "b": 416.75}, {"a": "2024-11-09 03:45:00", "b": 417.2}, {"a": "2024-11-09 03:50:00", "b": 410.3333333333333}, {"a": "2024-11-09 03:55:00", "b": 421.5}, {"a": "2024-11-09 04:00:00", "b": 426.75}, {"a": "2024-11-09 04:05:00", "b": 417.25}, {"a": "2024-11-09 04:10:00", "b": 422.6}, {"a": "2024-11-09 04:15:00", "b": 428.0}, {"a": "2024-11-09 04:20:00", "b": 412.6666666666667}, {"a": "2024-11-09 04:25:00", "b": 415.0}, {"a": "2024-11-09 04:30:00", "b": 410.6}, {"a": "2024-11-09 04:35:00", "b": 413.8}, {"a": "2024-11-09 04:40:00", "b": 418.2}, {"a": "2024-11-09 04:45:00", "b": 417.75}, {"a": "2024-11-09 04:50:00", "b": 415.75}, {"a": "2024-11-09 04:55:00", "b": 411.2}, {"a": "2024-11-09 05:00:00", "b": 409.5}, {"a": "2024-11-09 05:05:00", "b": 415.2}, {"a": "2024-11-09 05:10:00", "b": 407.5}, {"a": "2024-11-09 05:15:00", "b": 408.0}, {"a": "2024-11-09 05:20:00", "b": 408.5}, {"a": "2024-11-09 05:25:00", "b": 410.3333333333333}, {"a": "2024-11-09 05:30:00", "b": 414.75}, {"a": "2024-11-09 05:35:00", "b": 409.0}, {"a": "2024-11-09 05:40:00", "b": 407.0}, {"a": "2024-11-09 05:45:00", "b": 407.0}, {"a": "2024-11-09 05:50:00", "b": 410.6666666666667}, {"a": "2024-11-09 05:55:00", "b": 410.25}, {"a": "2024-11-09 06:00:00", "b": 410.75}, {"a": "2024-11-09 06:05:00", "b": 418.6}, {"a": "2024-11-09 06:10:00", "b": 430.0}, {"a": "2024-11-09 06:15:00", "b": 433.8}, {"a": "2024-11-09 06:20:00", "b": 436.6}, {"a": "2024-11-09 06:25:00", "b": 441.75}, {"a": "2024-11-09 06:30:00", "b": 441.8}, {"a": "2024-11-09 06:35:00", "b": 449.0}, {"a": "2024-11-09 06:40:00", "b": 456.5}, {"a": "2024-11-09 06:45:00", "b": 468.0}, {"a": "2024-11-09 06:50:00", "b": 471.4}, {"a": "2024-11-09 06:55:00", "b": 463.6}, {"a": "2024-11-09 07:00:00", "b": 491.2}, {"a": "2024-11-09 07:05:00", "b": 491.4}, {"a": "2024-11-09 07:10:00", "b": 496.6}, {"a": "2024-11-09 07:15:00", "b": 516.4}, {"a": "2024-11-09 07:20:00", "b": 504.0}, {"a": "2024-11-09 07:25:00", "b": 497.0}, {"a": "2024-11-09 07:30:00", "b": 493.2}, {"a": "2024-11-09 07:35:00", "b": 494.6}, {"a": "2024-11-09 07:40:00", "b": 495.6}, {"a": "2024-11-09 07:45:00", "b": 507.4}, {"a": "2024-11-09 07:50:00", "b": 522.6}, {"a": "2024-11-09 07:55:00", "b": 521.4}, {"a": "2024-11-09 08:00:00", "b": 522.5}, {"a": "2024-11-09 08:05:00", "b": 519.75}, {"a": "2024-11-09 08:10:00", "b": 529.75}, {"a": "2024-11-09 08:15:00", "b": 533.3333333333334}, {"a": "2024-11-09 08:20:00", "b": 523.6666666666666}, {"a": "2024-11-09 08:25:00", "b": 534.2}, {"a": "2024-11-09 08:30:00", "b": 537.8}, {"a": "2024-11-09 08:35:00", "b": 544.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    