
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-03 03:00:00", "b": 542.0}, {"a": "2025-02-03 03:05:00", "b": 532.8}, {"a": "2025-02-03 03:10:00", "b": 535.5}, {"a": "2025-02-03 03:15:00", "b": 532.0}, {"a": "2025-02-03 03:20:00", "b": 537.0}, {"a": "2025-02-03 03:25:00", "b": 532.75}, {"a": "2025-02-03 03:30:00", "b": 523.8}, {"a": "2025-02-03 03:35:00", "b": 529.25}, {"a": "2025-02-03 03:40:00", "b": 512.0}, {"a": "2025-02-03 03:45:00", "b": 510.8}, {"a": "2025-02-03 03:50:00", "b": 515.6}, {"a": "2025-02-03 03:55:00", "b": 504.25}, {"a": "2025-02-03 04:00:00", "b": 496.75}, {"a": "2025-02-03 04:05:00", "b": 503.4}, {"a": "2025-02-03 04:10:00", "b": 488.0}, {"a": "2025-02-03 04:15:00", "b": 494.0}, {"a": "2025-02-03 04:20:00", "b": 496.4}, {"a": "2025-02-03 04:25:00", "b": 492.25}, {"a": "2025-02-03 04:30:00", "b": 490.6}, {"a": "2025-02-03 04:35:00", "b": 497.4}, {"a": "2025-02-03 04:40:00", "b": 482.0}, {"a": "2025-02-03 04:45:00", "b": 467.2}, {"a": "2025-02-03 04:50:00", "b": 462.4}, {"a": "2025-02-03 04:55:00", "b": 468.25}, {"a": "2025-02-03 05:00:00", "b": 485.25}, {"a": "2025-02-03 05:05:00", "b": 482.0}, {"a": "2025-02-03 05:10:00", "b": 467.0}, {"a": "2025-02-03 05:15:00", "b": 469.2}, {"a": "2025-02-03 05:20:00", "b": 467.75}, {"a": "2025-02-03 05:25:00", "b": 464.6}, {"a": "2025-02-03 05:30:00", "b": 463.25}, {"a": "2025-02-03 05:35:00", "b": 465.75}, {"a": "2025-02-03 05:40:00", "b": 458.0}, {"a": "2025-02-03 05:45:00", "b": 443.2}, {"a": "2025-02-03 05:50:00", "b": 456.0}, {"a": "2025-02-03 05:55:00", "b": 457.0}, {"a": "2025-02-03 06:00:00", "b": 456.6666666666667}, {"a": "2025-02-03 06:05:00", "b": 460.0}, {"a": "2025-02-03 06:10:00", "b": 457.0}, {"a": "2025-02-03 06:15:00", "b": 448.6}, {"a": "2025-02-03 06:20:00", "b": 440.25}, {"a": "2025-02-03 06:25:00", "b": 444.0}, {"a": "2025-02-03 06:30:00", "b": 455.8}, {"a": "2025-02-03 06:35:00", "b": 453.0}, {"a": "2025-02-03 06:40:00", "b": 464.75}, {"a": "2025-02-03 06:45:00", "b": 485.3333333333333}, {"a": "2025-02-03 06:50:00", "b": 484.8}, {"a": "2025-02-03 06:55:00", "b": 476.5}, {"a": "2025-02-03 07:00:00", "b": 470.0}, {"a": "2025-02-03 07:05:00", "b": 462.8}, {"a": "2025-02-03 07:10:00", "b": 463.8}, {"a": "2025-02-03 07:15:00", "b": 496.8}, {"a": "2025-02-03 07:20:00", "b": 503.4}, {"a": "2025-02-03 07:25:00", "b": 502.25}, {"a": "2025-02-03 07:30:00", "b": 505.5}, {"a": "2025-02-03 07:35:00", "b": 502.0}, {"a": "2025-02-03 07:40:00", "b": 518.6}, {"a": "2025-02-03 07:45:00", "b": 537.75}, {"a": "2025-02-03 07:50:00", "b": 545.0}, {"a": "2025-02-03 07:55:00", "b": 551.5}, {"a": "2025-02-03 08:00:00", "b": 559.8}, {"a": "2025-02-03 08:05:00", "b": 576.8}, {"a": "2025-02-03 08:10:00", "b": 573.0}, {"a": "2025-02-03 08:15:00", "b": 570.4}, {"a": "2025-02-03 08:20:00", "b": 578.2}, {"a": "2025-02-03 08:25:00", "b": 572.25}, {"a": "2025-02-03 08:30:00", "b": 575.5}, {"a": "2025-02-03 08:35:00", "b": 574.4}, {"a": "2025-02-03 08:40:00", "b": 569.6666666666666}, {"a": "2025-02-03 08:45:00", "b": 575.4}, {"a": "2025-02-03 08:50:00", "b": 578.0}, {"a": "2025-02-03 08:55:00", "b": 572.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    