
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-19 05:00:00", "b": 487.25}, {"a": "2024-12-19 05:05:00", "b": 495.75}, {"a": "2024-12-19 05:10:00", "b": 494.75}, {"a": "2024-12-19 05:15:00", "b": 501.0}, {"a": "2024-12-19 05:20:00", "b": 503.0}, {"a": "2024-12-19 05:25:00", "b": 496.75}, {"a": "2024-12-19 05:30:00", "b": 508.25}, {"a": "2024-12-19 05:35:00", "b": 506.0}, {"a": "2024-12-19 05:40:00", "b": 496.0}, {"a": "2024-12-19 05:45:00", "b": 493.8}, {"a": "2024-12-19 05:50:00", "b": 504.4}, {"a": "2024-12-19 05:55:00", "b": 507.2}, {"a": "2024-12-19 06:00:00", "b": 496.4}, {"a": "2024-12-19 06:05:00", "b": 506.0}, {"a": "2024-12-19 06:10:00", "b": 510.0}, {"a": "2024-12-19 06:15:00", "b": 498.75}, {"a": "2024-12-19 06:20:00", "b": 491.75}, {"a": "2024-12-19 06:25:00", "b": 497.3333333333333}, {"a": "2024-12-19 06:30:00", "b": 498.4}, {"a": "2024-12-19 06:35:00", "b": 495.6}, {"a": "2024-12-19 06:40:00", "b": 509.0}, {"a": "2024-12-19 06:45:00", "b": 543.0}, {"a": "2024-12-19 06:50:00", "b": 529.0}, {"a": "2024-12-19 06:55:00", "b": 541.5}, {"a": "2024-12-19 07:00:00", "b": 550.0}, {"a": "2024-12-19 07:05:00", "b": 558.4}, {"a": "2024-12-19 07:10:00", "b": 550.0}, {"a": "2024-12-19 07:15:00", "b": 539.2}, {"a": "2024-12-19 07:20:00", "b": 539.0}, {"a": "2024-12-19 07:25:00", "b": 540.4}, {"a": "2024-12-19 07:30:00", "b": 537.5}, {"a": "2024-12-19 07:35:00", "b": 544.3333333333334}, {"a": "2024-12-19 07:40:00", "b": 547.0}, {"a": "2024-12-19 07:45:00", "b": 562.6}, {"a": "2024-12-19 07:50:00", "b": 611.2}, {"a": "2024-12-19 07:55:00", "b": 670.2}, {"a": "2024-12-19 08:00:00", "b": 692.6}, {"a": "2024-12-19 08:05:00", "b": 660.0}, {"a": "2024-12-19 08:10:00", "b": 650.6}, {"a": "2024-12-19 08:15:00", "b": 664.6}, {"a": "2024-12-19 08:20:00", "b": 652.5}, {"a": "2024-12-19 08:25:00", "b": 670.2}, {"a": "2024-12-19 08:30:00", "b": 666.8}, {"a": "2024-12-19 08:35:00", "b": 666.4}, {"a": "2024-12-19 08:40:00", "b": 678.4}, {"a": "2024-12-19 08:45:00", "b": 659.0}, {"a": "2024-12-19 08:50:00", "b": 603.6}, {"a": "2024-12-19 08:55:00", "b": 564.75}, {"a": "2024-12-19 09:00:00", "b": 560.3333333333334}, {"a": "2024-12-19 09:05:00", "b": 535.5}, {"a": "2024-12-19 09:10:00", "b": 520.5}, {"a": "2024-12-19 09:15:00", "b": 524.0}, {"a": "2024-12-19 09:20:00", "b": 537.75}, {"a": "2024-12-19 09:25:00", "b": 542.6}, {"a": "2024-12-19 09:30:00", "b": 556.75}, {"a": "2024-12-19 09:35:00", "b": 577.4}, {"a": "2024-12-19 09:40:00", "b": 638.2}, {"a": "2024-12-19 09:45:00", "b": 656.4}, {"a": "2024-12-19 09:50:00", "b": 600.8}, {"a": "2024-12-19 09:55:00", "b": 577.6}, {"a": "2024-12-19 10:00:00", "b": 565.25}, {"a": "2024-12-19 10:05:00", "b": 544.8}, {"a": "2024-12-19 10:10:00", "b": 531.0}, {"a": "2024-12-19 10:15:00", "b": 534.0}, {"a": "2024-12-19 10:20:00", "b": 529.0}, {"a": "2024-12-19 10:25:00", "b": 539.2}, {"a": "2024-12-19 10:30:00", "b": 538.6}, {"a": "2024-12-19 10:35:00", "b": 519.0}, {"a": "2024-12-19 10:40:00", "b": 574.0}, {"a": "2024-12-19 10:45:00", "b": 648.6}, {"a": "2024-12-19 10:50:00", "b": 593.6}, {"a": "2024-12-19 10:55:00", "b": 596.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    