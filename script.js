
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-08 13:40:00", "b": 576.0}, {"a": "2024-11-08 13:45:00", "b": 579.3333333333334}, {"a": "2024-11-08 13:50:00", "b": 571.0}, {"a": "2024-11-08 13:55:00", "b": 568.5}, {"a": "2024-11-08 14:00:00", "b": 578.2}, {"a": "2024-11-08 14:05:00", "b": 577.0}, {"a": "2024-11-08 14:10:00", "b": 577.4}, {"a": "2024-11-08 14:15:00", "b": 590.4}, {"a": "2024-11-08 14:20:00", "b": 589.0}, {"a": "2024-11-08 14:25:00", "b": 585.0}, {"a": "2024-11-08 14:30:00", "b": 585.75}, {"a": "2024-11-08 14:35:00", "b": 586.75}, {"a": "2024-11-08 14:40:00", "b": 596.0}, {"a": "2024-11-08 14:45:00", "b": 597.8}, {"a": "2024-11-08 14:50:00", "b": 604.2}, {"a": "2024-11-08 14:55:00", "b": 619.4}, {"a": "2024-11-08 15:00:00", "b": 618.25}, {"a": "2024-11-08 15:05:00", "b": 621.25}, {"a": "2024-11-08 15:10:00", "b": 629.6}, {"a": "2024-11-08 15:15:00", "b": 628.0}, {"a": "2024-11-08 15:20:00", "b": 611.6}, {"a": "2024-11-08 15:25:00", "b": 632.25}, {"a": "2024-11-08 15:30:00", "b": 639.8}, {"a": "2024-11-08 15:35:00", "b": 626.0}, {"a": "2024-11-08 15:40:00", "b": 618.25}, {"a": "2024-11-08 15:45:00", "b": 644.0}, {"a": "2024-11-08 15:50:00", "b": 660.5}, {"a": "2024-11-08 15:55:00", "b": 661.0}, {"a": "2024-11-08 16:00:00", "b": 653.75}, {"a": "2024-11-08 16:05:00", "b": 646.0}, {"a": "2024-11-08 16:10:00", "b": 648.0}, {"a": "2024-11-08 16:15:00", "b": 651.4}, {"a": "2024-11-08 16:20:00", "b": 630.25}, {"a": "2024-11-08 16:25:00", "b": 616.0}, {"a": "2024-11-08 16:30:00", "b": 614.6666666666666}, {"a": "2024-11-08 16:35:00", "b": 603.8}, {"a": "2024-11-08 16:40:00", "b": 589.4}, {"a": "2024-11-08 16:45:00", "b": 577.2}, {"a": "2024-11-08 16:50:00", "b": 566.6}, {"a": "2024-11-08 16:55:00", "b": 568.0}, {"a": "2024-11-08 17:00:00", "b": 563.8}, {"a": "2024-11-08 17:05:00", "b": 541.0}, {"a": "2024-11-08 17:10:00", "b": 514.8}, {"a": "2024-11-08 17:15:00", "b": 502.4}, {"a": "2024-11-08 17:20:00", "b": 501.5}, {"a": "2024-11-08 17:25:00", "b": 499.4}, {"a": "2024-11-08 17:30:00", "b": 502.6}, {"a": "2024-11-08 17:35:00", "b": 510.0}, {"a": "2024-11-08 17:40:00", "b": 514.8}, {"a": "2024-11-08 17:45:00", "b": 527.0}, {"a": "2024-11-08 17:50:00", "b": 533.6666666666666}, {"a": "2024-11-08 17:55:00", "b": 529.0}, {"a": "2024-11-08 18:00:00", "b": 513.4}, {"a": "2024-11-08 18:05:00", "b": 515.6}, {"a": "2024-11-08 18:10:00", "b": 514.6}, {"a": "2024-11-08 18:15:00", "b": 496.5}, {"a": "2024-11-08 18:20:00", "b": 507.0}, {"a": "2024-11-08 18:25:00", "b": 505.2}, {"a": "2024-11-08 18:30:00", "b": 500.6}, {"a": "2024-11-08 18:35:00", "b": 498.25}, {"a": "2024-11-08 18:40:00", "b": 492.0}, {"a": "2024-11-08 18:45:00", "b": 493.2}, {"a": "2024-11-08 18:50:00", "b": 502.0}, {"a": "2024-11-08 18:55:00", "b": 429.4}, {"a": "2024-11-08 19:00:00", "b": 408.5}, {"a": "2024-11-08 19:05:00", "b": 407.0}, {"a": "2024-11-08 19:10:00", "b": 409.5}, {"a": "2024-11-08 19:15:00", "b": 411.0}, {"a": "2024-11-08 19:20:00", "b": 416.25}, {"a": "2024-11-08 19:25:00", "b": 410.6}, {"a": "2024-11-08 19:30:00", "b": 414.0}, {"a": "2024-11-08 19:35:00", "b": 425.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    